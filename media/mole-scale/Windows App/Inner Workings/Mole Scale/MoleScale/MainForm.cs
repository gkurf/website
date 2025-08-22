using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.IO.Ports;

namespace MoleScale
{
    public partial class MainForm : Form
    {
        private static Dictionary<string, double> periodic =
                new Dictionary<string, double>();
        private static bool hold = false;
        public MainForm()
        {
            InitializeComponent();
        }
        private void ClearText(Control con)
        {
            foreach (Control c in con.Controls)
            {
                if (c is TextBox)
                    ((TextBox)c).Clear();
                else
                    ClearText(c);
            }
        }
        private void Form1_Load(object sender, EventArgs e)
        {
            UpdatePortList();
            ClearText(this);
           string[] lines = System.IO.File.ReadAllLines(@".\PeriodicMass.txt");
            foreach (string line in lines)
            {
                periodic.Add(line.Split(',')[0], double.Parse(line.Split(',')[1]));
            }
        }
        private void btnRefresh_Click(object sender, EventArgs e)
        {
            UpdatePortList();
        }
        private void UpdatePortList()
        {
            cmbPortName.Items.Clear();
            string[] ports = SerialPort.GetPortNames();
            if (ports.Length > 0)
            {
                cmbPortName.Text = ports[0];
                foreach (string port in ports)
                {
                    cmbPortName.Items.Add(port);
                }
            }
            else
            {
                cmbPortName.Text = "No Ports Available";
            }
        }
        public static SerialPort ComPort = new SerialPort();  //Initialise ComPort Variable as SerialPort

        private void connect()
        {
            ComPort.PortName = cmbPortName.Text;

            try  //always try to use this try and catch method to open your port.
                 //if there is an error your program will not display a message instead of freezing.
            {
                //Open Port
                ComPort.Open();
                btnConnect.Text = "Disconnect";
                groupBox2.Enabled = true;
                ComPort.DataReceived += SerialPortDataReceived;  //Check for received data
            }
            catch
            {
                MessageBox.Show(this, "Could not open COM port. Most likely it is already in use, has been removed, or is unavailable.", "COM Port Error", MessageBoxButtons.OK, MessageBoxIcon.Stop);
            }
        }
        private void disconnect()
        {
            ComPort.Close();
            btnConnect.Text = "Connect";
            groupBox2.Enabled = false;
            ClearText(this);
            UpdatePortList();
        }
        private void btnConnect_Click(object sender, EventArgs e)
        {
            if (!ComPort.IsOpen)
            {
                connect();
            }
            else
            {
                disconnect();
            }
        }

        private void SerialPortDataReceived(object sender, SerialDataReceivedEventArgs e)
        {
            if (hold) { return; }
            string data = ComPort.ReadLine().Trim();
            float datacode = 0.00f;
            try
            {
                datacode = float.Parse(ComPort.ReadLine());
                txtData.Text = datacode.ToString("n2");
                if (datacode < 0) 
                { 
                    datacode = 0;
                }
                txtData2.Text = datacode.ToString("n2");
                txtMoles.Text = (datacode / float.Parse(txtMass.Text)).ToString();
                txtMoleculesSci.Text = (float.Parse(txtMoles.Text) * 6.0221409e+23).ToString();
                txtMolecules.Text = Decimal.Parse((datacode / float.Parse(txtMass.Text) * 6.0221409e+23).ToString(), System.Globalization.NumberStyles.Any).ToString("N0");
                int i = txtMolecules.Text.Split(',').Length - 1;
                string digit = txtMolecules.Text.Split(',')[i];
                txtOne.Text = digit;
                i -= 1;
                if (i < 0) { digit = "0"; }
                else { digit = txtMolecules.Text.Split(',')[i]; }
                txtThousand.Text = digit;
                i -= 1;
                if (i < 0) { digit = "0"; }
                else { digit = txtMolecules.Text.Split(',')[i]; }
                txtMillion.Text = digit;
                i -= 1;
                if (i < 0) { digit = "0"; }
                else { digit = txtMolecules.Text.Split(',')[i]; }
                txtBillion.Text = digit;
                i -= 1;
                if (i < 0) { digit = "0"; }
                else { digit = txtMolecules.Text.Split(',')[i]; }
                txtTrillion.Text = digit;
                i -= 1;
                if (i < 0) { digit = "0"; }
                else { digit = txtMolecules.Text.Split(',')[i]; }
                txtQuadrillion.Text = digit;
                i -= 1;
                if (i < 0) { digit = "0"; }
                else { digit = txtMolecules.Text.Split(',')[i]; }
                txtQuintillion.Text = digit;
                i -= 1;
                if (i < 0) { digit = "0"; }
                else { digit = txtMolecules.Text.Split(',')[i]; }
                txtSextillion.Text = digit;
                i -= 1;
                if (i < 0) { digit = "0"; }
                else { digit = txtMolecules.Text.Split(',')[i]; }
                txtSeptillion.Text = digit;
                i -= 1;
                if (i < 0) { digit = "0"; }
                else { digit = txtMolecules.Text.Split(',')[i]; }
            }
            catch (FormatException)
            {

            }
        }

        private void btnTare_Click(object sender, EventArgs e)
        {
            ComPort.Write("1");
        }

        private void btnCalibrate_Click(object sender, EventArgs e)
        {
            ComPort.Write("2");
            var popup = new CalibrateDialog();
            popup.ShowDialog();
        }

        private void txtFormula_TextChanged(object sender, EventArgs e)
        {
            string element = ""; int exponent = 0; double mass = 0;
            try
            {
                foreach (char character in txtFormula.Text)
                {
                    if (char.IsUpper(character) && element.Length > 0)
                    {
                        if (exponent == 0) 
                        { 
                            exponent = 1; 
                        }
                        mass += periodic[element] * exponent;
                        element = character.ToString();
                        exponent = 0;
                    }
                    else if (char.IsDigit(character))
                    {
                        exponent = exponent * 10 + int.Parse(character.ToString());
                    }
                    else
                    {
                        element += character;
                    }
                }
                if (exponent == 0)
                {
                    exponent = 1;
                }
                mass += periodic[element] * exponent;
                txtMass.Text = mass.ToString();
            }
            catch
            {
                txtMass.Text = "Invalid formula";
                txtMoles.Clear(); txtMoleculesSci.Clear(); txtMolecules.Clear(); txtSeptillion.Clear(); txtSextillion.Clear(); txtQuintillion.Clear();
                txtQuadrillion.Clear(); txtTrillion.Clear(); txtBillion.Clear(); txtMillion.Clear(); txtThousand.Clear(); txtOne.Clear();
            }
        }

        private void bthHold_Click(object sender, EventArgs e)
        {
            if (hold)
            {
                hold = false;
                btnHold.Text = "Hold";
            }
            else
            {
                hold = true;
                btnHold.Text = "Unhold";
            }
        }
    }
}
