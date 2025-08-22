using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace MoleScale
{
    public partial class CalibrateDialog : Form
    {
        public MainForm ComPort;
        public CalibrateDialog()
        {
            InitializeComponent();
        }

        private void numWeight_ValueChanged(object sender, EventArgs e)
        {

        }

        private void btnCalibrate_Click(object sender, EventArgs e)
        {
            if (btnCalibrate.Text == "Tare")
            {
                MainForm.ComPort.Write("2");
                btnCalibrate.Text = "Calibrate";
                label1.Text = "SCALE CALIBRATION\n\nSet a known weight on the scale, and enter its weight in the box below. Then, press \"Calibrate\" to finish calibration";
                numWeight.Visible = true; label2.Visible = true;
            }
            else
            {
                MainForm.ComPort.Write(numWeight.Value.ToString());
                Close();
            }
        }
    }
}
