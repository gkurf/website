
namespace MoleScale
{
    partial class MainForm
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            this.serialPort2 = new System.IO.Ports.SerialPort(this.components);
            this.cmbPortName = new System.Windows.Forms.ComboBox();
            this.label2 = new System.Windows.Forms.Label();
            this.btnConnect = new System.Windows.Forms.Button();
            this.txtData = new System.Windows.Forms.TextBox();
            this.btnTare = new System.Windows.Forms.Button();
            this.btnRefresh = new System.Windows.Forms.Button();
            this.label1 = new System.Windows.Forms.Label();
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.btnCalibrate = new System.Windows.Forms.Button();
            this.label4 = new System.Windows.Forms.Label();
            this.txtFormula = new System.Windows.Forms.TextBox();
            this.txtMass = new System.Windows.Forms.TextBox();
            this.label5 = new System.Windows.Forms.Label();
            this.label6 = new System.Windows.Forms.Label();
            this.txtMoleculesSci = new System.Windows.Forms.TextBox();
            this.label7 = new System.Windows.Forms.Label();
            this.txtMoles = new System.Windows.Forms.TextBox();
            this.txtOne = new System.Windows.Forms.TextBox();
            this.txtThousand = new System.Windows.Forms.TextBox();
            this.txtMillion = new System.Windows.Forms.TextBox();
            this.txtBillion = new System.Windows.Forms.TextBox();
            this.txtTrillion = new System.Windows.Forms.TextBox();
            this.txtQuadrillion = new System.Windows.Forms.TextBox();
            this.txtQuintillion = new System.Windows.Forms.TextBox();
            this.txtSextillion = new System.Windows.Forms.TextBox();
            this.txtSeptillion = new System.Windows.Forms.TextBox();
            this.label3 = new System.Windows.Forms.Label();
            this.label8 = new System.Windows.Forms.Label();
            this.label9 = new System.Windows.Forms.Label();
            this.label10 = new System.Windows.Forms.Label();
            this.label11 = new System.Windows.Forms.Label();
            this.label12 = new System.Windows.Forms.Label();
            this.label13 = new System.Windows.Forms.Label();
            this.label14 = new System.Windows.Forms.Label();
            this.label15 = new System.Windows.Forms.Label();
            this.txtMolecules = new System.Windows.Forms.TextBox();
            this.groupBox2 = new System.Windows.Forms.GroupBox();
            this.groupBox3 = new System.Windows.Forms.GroupBox();
            this.label18 = new System.Windows.Forms.Label();
            this.label17 = new System.Windows.Forms.Label();
            this.txtData2 = new System.Windows.Forms.TextBox();
            this.label16 = new System.Windows.Forms.Label();
            this.btnHold = new System.Windows.Forms.Button();
            this.groupBox1.SuspendLayout();
            this.groupBox2.SuspendLayout();
            this.groupBox3.SuspendLayout();
            this.SuspendLayout();
            // 
            // cmbPortName
            // 
            this.cmbPortName.FormattingEnabled = true;
            this.cmbPortName.Location = new System.Drawing.Point(94, 25);
            this.cmbPortName.Name = "cmbPortName";
            this.cmbPortName.Size = new System.Drawing.Size(151, 28);
            this.cmbPortName.TabIndex = 13;
            this.cmbPortName.Text = "No Ports Available";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(6, 28);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(82, 20);
            this.label2.TabIndex = 8;
            this.label2.Text = "COM Port:";
            // 
            // btnConnect
            // 
            this.btnConnect.Location = new System.Drawing.Point(94, 64);
            this.btnConnect.Name = "btnConnect";
            this.btnConnect.Size = new System.Drawing.Size(151, 29);
            this.btnConnect.TabIndex = 2;
            this.btnConnect.Text = "Connect";
            this.btnConnect.UseVisualStyleBackColor = true;
            this.btnConnect.Click += new System.EventHandler(this.btnConnect_Click);
            // 
            // txtData
            // 
            this.txtData.Location = new System.Drawing.Point(142, 66);
            this.txtData.Name = "txtData";
            this.txtData.ReadOnly = true;
            this.txtData.Size = new System.Drawing.Size(105, 26);
            this.txtData.TabIndex = 14;
            // 
            // btnTare
            // 
            this.btnTare.Location = new System.Drawing.Point(6, 25);
            this.btnTare.Name = "btnTare";
            this.btnTare.Size = new System.Drawing.Size(65, 28);
            this.btnTare.TabIndex = 15;
            this.btnTare.Text = "Tare";
            this.btnTare.UseVisualStyleBackColor = true;
            this.btnTare.Click += new System.EventHandler(this.btnTare_Click);
            // 
            // btnRefresh
            // 
            this.btnRefresh.Location = new System.Drawing.Point(10, 65);
            this.btnRefresh.Name = "btnRefresh";
            this.btnRefresh.Size = new System.Drawing.Size(78, 29);
            this.btnRefresh.TabIndex = 16;
            this.btnRefresh.Text = "Refresh";
            this.btnRefresh.UseVisualStyleBackColor = true;
            this.btnRefresh.Click += new System.EventHandler(this.btnRefresh_Click);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(6, 69);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(130, 20);
            this.label1.TabIndex = 17;
            this.label1.Text = "Scale Weight (g):";
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.label2);
            this.groupBox1.Controls.Add(this.btnConnect);
            this.groupBox1.Controls.Add(this.btnRefresh);
            this.groupBox1.Controls.Add(this.cmbPortName);
            this.groupBox1.Location = new System.Drawing.Point(12, 12);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(257, 104);
            this.groupBox1.TabIndex = 18;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "USB Connection";
            // 
            // btnCalibrate
            // 
            this.btnCalibrate.Location = new System.Drawing.Point(163, 25);
            this.btnCalibrate.Name = "btnCalibrate";
            this.btnCalibrate.Size = new System.Drawing.Size(84, 28);
            this.btnCalibrate.TabIndex = 20;
            this.btnCalibrate.Text = "Calibrate";
            this.btnCalibrate.UseVisualStyleBackColor = true;
            this.btnCalibrate.Click += new System.EventHandler(this.btnCalibrate_Click);
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(6, 31);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(140, 20);
            this.label4.TabIndex = 22;
            this.label4.Text = "Chemical Formula:";
            // 
            // txtFormula
            // 
            this.txtFormula.Location = new System.Drawing.Point(174, 28);
            this.txtFormula.Name = "txtFormula";
            this.txtFormula.Size = new System.Drawing.Size(183, 26);
            this.txtFormula.TabIndex = 21;
            this.txtFormula.TextChanged += new System.EventHandler(this.txtFormula_TextChanged);
            // 
            // txtMass
            // 
            this.txtMass.Location = new System.Drawing.Point(382, 75);
            this.txtMass.Name = "txtMass";
            this.txtMass.ReadOnly = true;
            this.txtMass.Size = new System.Drawing.Size(77, 26);
            this.txtMass.TabIndex = 23;
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Location = new System.Drawing.Point(6, 78);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(74, 20);
            this.label5.TabIndex = 24;
            this.label5.Text = "Mass (g):";
            // 
            // label6
            // 
            this.label6.AutoSize = true;
            this.label6.Location = new System.Drawing.Point(6, 142);
            this.label6.Name = "label6";
            this.label6.Size = new System.Drawing.Size(162, 20);
            this.label6.TabIndex = 26;
            this.label6.Text = "Number of Molecules:";
            // 
            // txtMoleculesSci
            // 
            this.txtMoleculesSci.Location = new System.Drawing.Point(174, 139);
            this.txtMoleculesSci.Name = "txtMoleculesSci";
            this.txtMoleculesSci.ReadOnly = true;
            this.txtMoleculesSci.Size = new System.Drawing.Size(183, 26);
            this.txtMoleculesSci.TabIndex = 25;
            // 
            // label7
            // 
            this.label7.AutoSize = true;
            this.label7.Location = new System.Drawing.Point(6, 110);
            this.label7.Name = "label7";
            this.label7.Size = new System.Drawing.Size(94, 20);
            this.label7.TabIndex = 28;
            this.label7.Text = "Moles (mol):";
            // 
            // txtMoles
            // 
            this.txtMoles.Location = new System.Drawing.Point(174, 107);
            this.txtMoles.Name = "txtMoles";
            this.txtMoles.ReadOnly = true;
            this.txtMoles.Size = new System.Drawing.Size(183, 26);
            this.txtMoles.TabIndex = 27;
            // 
            // txtOne
            // 
            this.txtOne.Location = new System.Drawing.Point(467, 236);
            this.txtOne.Name = "txtOne";
            this.txtOne.ReadOnly = true;
            this.txtOne.Size = new System.Drawing.Size(33, 26);
            this.txtOne.TabIndex = 29;
            this.txtOne.Text = "000";
            this.txtOne.TextAlign = System.Windows.Forms.HorizontalAlignment.Right;
            // 
            // txtThousand
            // 
            this.txtThousand.Location = new System.Drawing.Point(412, 236);
            this.txtThousand.Name = "txtThousand";
            this.txtThousand.ReadOnly = true;
            this.txtThousand.Size = new System.Drawing.Size(33, 26);
            this.txtThousand.TabIndex = 30;
            this.txtThousand.Text = "000";
            this.txtThousand.TextAlign = System.Windows.Forms.HorizontalAlignment.Right;
            // 
            // txtMillion
            // 
            this.txtMillion.Location = new System.Drawing.Point(356, 236);
            this.txtMillion.Name = "txtMillion";
            this.txtMillion.ReadOnly = true;
            this.txtMillion.Size = new System.Drawing.Size(33, 26);
            this.txtMillion.TabIndex = 31;
            this.txtMillion.Text = "000";
            this.txtMillion.TextAlign = System.Windows.Forms.HorizontalAlignment.Right;
            // 
            // txtBillion
            // 
            this.txtBillion.Location = new System.Drawing.Point(300, 236);
            this.txtBillion.Name = "txtBillion";
            this.txtBillion.ReadOnly = true;
            this.txtBillion.Size = new System.Drawing.Size(33, 26);
            this.txtBillion.TabIndex = 32;
            this.txtBillion.Text = "000";
            this.txtBillion.TextAlign = System.Windows.Forms.HorizontalAlignment.Right;
            // 
            // txtTrillion
            // 
            this.txtTrillion.Location = new System.Drawing.Point(243, 236);
            this.txtTrillion.Name = "txtTrillion";
            this.txtTrillion.ReadOnly = true;
            this.txtTrillion.Size = new System.Drawing.Size(33, 26);
            this.txtTrillion.TabIndex = 33;
            this.txtTrillion.Text = "000";
            this.txtTrillion.TextAlign = System.Windows.Forms.HorizontalAlignment.Right;
            // 
            // txtQuadrillion
            // 
            this.txtQuadrillion.Location = new System.Drawing.Point(188, 236);
            this.txtQuadrillion.Name = "txtQuadrillion";
            this.txtQuadrillion.ReadOnly = true;
            this.txtQuadrillion.Size = new System.Drawing.Size(33, 26);
            this.txtQuadrillion.TabIndex = 34;
            this.txtQuadrillion.Text = "000";
            this.txtQuadrillion.TextAlign = System.Windows.Forms.HorizontalAlignment.Right;
            // 
            // txtQuintillion
            // 
            this.txtQuintillion.Location = new System.Drawing.Point(131, 236);
            this.txtQuintillion.Name = "txtQuintillion";
            this.txtQuintillion.ReadOnly = true;
            this.txtQuintillion.Size = new System.Drawing.Size(33, 26);
            this.txtQuintillion.TabIndex = 35;
            this.txtQuintillion.Text = "000";
            this.txtQuintillion.TextAlign = System.Windows.Forms.HorizontalAlignment.Right;
            // 
            // txtSextillion
            // 
            this.txtSextillion.Location = new System.Drawing.Point(75, 236);
            this.txtSextillion.Name = "txtSextillion";
            this.txtSextillion.ReadOnly = true;
            this.txtSextillion.Size = new System.Drawing.Size(33, 26);
            this.txtSextillion.TabIndex = 36;
            this.txtSextillion.Text = "000";
            this.txtSextillion.TextAlign = System.Windows.Forms.HorizontalAlignment.Right;
            // 
            // txtSeptillion
            // 
            this.txtSeptillion.Location = new System.Drawing.Point(18, 236);
            this.txtSeptillion.Name = "txtSeptillion";
            this.txtSeptillion.ReadOnly = true;
            this.txtSeptillion.Size = new System.Drawing.Size(33, 26);
            this.txtSeptillion.TabIndex = 37;
            this.txtSeptillion.Text = "000";
            this.txtSeptillion.TextAlign = System.Windows.Forms.HorizontalAlignment.Right;
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label3.Location = new System.Drawing.Point(470, 264);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(27, 13);
            this.label3.TabIndex = 38;
            this.label3.Text = "One";
            // 
            // label8
            // 
            this.label8.AutoSize = true;
            this.label8.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label8.Location = new System.Drawing.Point(11, 265);
            this.label8.Name = "label8";
            this.label8.Size = new System.Drawing.Size(49, 13);
            this.label8.TabIndex = 39;
            this.label8.Text = "Septillion";
            // 
            // label9
            // 
            this.label9.AutoSize = true;
            this.label9.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label9.Location = new System.Drawing.Point(68, 265);
            this.label9.Name = "label9";
            this.label9.Size = new System.Drawing.Size(48, 13);
            this.label9.TabIndex = 40;
            this.label9.Text = "Sextillion";
            // 
            // label10
            // 
            this.label10.AutoSize = true;
            this.label10.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label10.Location = new System.Drawing.Point(122, 265);
            this.label10.Name = "label10";
            this.label10.Size = new System.Drawing.Size(52, 13);
            this.label10.TabIndex = 41;
            this.label10.Text = "Quintillion";
            // 
            // label11
            // 
            this.label11.AutoSize = true;
            this.label11.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label11.Location = new System.Drawing.Point(176, 265);
            this.label11.Name = "label11";
            this.label11.Size = new System.Drawing.Size(56, 13);
            this.label11.TabIndex = 42;
            this.label11.Text = "Quadrillion";
            // 
            // label12
            // 
            this.label12.AutoSize = true;
            this.label12.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label12.Location = new System.Drawing.Point(241, 265);
            this.label12.Name = "label12";
            this.label12.Size = new System.Drawing.Size(37, 13);
            this.label12.TabIndex = 43;
            this.label12.Text = "Trillion";
            // 
            // label13
            // 
            this.label13.AutoSize = true;
            this.label13.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label13.Location = new System.Drawing.Point(300, 265);
            this.label13.Name = "label13";
            this.label13.Size = new System.Drawing.Size(34, 13);
            this.label13.TabIndex = 44;
            this.label13.Text = "Billion";
            // 
            // label14
            // 
            this.label14.AutoSize = true;
            this.label14.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label14.Location = new System.Drawing.Point(355, 265);
            this.label14.Name = "label14";
            this.label14.Size = new System.Drawing.Size(36, 13);
            this.label14.TabIndex = 45;
            this.label14.Text = "Million";
            // 
            // label15
            // 
            this.label15.AutoSize = true;
            this.label15.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label15.Location = new System.Drawing.Point(401, 265);
            this.label15.Name = "label15";
            this.label15.Size = new System.Drawing.Size(55, 13);
            this.label15.TabIndex = 46;
            this.label15.Text = "Thousand";
            // 
            // txtMolecules
            // 
            this.txtMolecules.Location = new System.Drawing.Point(75, 192);
            this.txtMolecules.Name = "txtMolecules";
            this.txtMolecules.ReadOnly = true;
            this.txtMolecules.Size = new System.Drawing.Size(370, 26);
            this.txtMolecules.TabIndex = 47;
            this.txtMolecules.TextAlign = System.Windows.Forms.HorizontalAlignment.Center;
            // 
            // groupBox2
            // 
            this.groupBox2.Controls.Add(this.btnHold);
            this.groupBox2.Controls.Add(this.label1);
            this.groupBox2.Controls.Add(this.txtData);
            this.groupBox2.Controls.Add(this.btnTare);
            this.groupBox2.Controls.Add(this.btnCalibrate);
            this.groupBox2.Enabled = false;
            this.groupBox2.Location = new System.Drawing.Point(275, 13);
            this.groupBox2.Name = "groupBox2";
            this.groupBox2.Size = new System.Drawing.Size(253, 104);
            this.groupBox2.TabIndex = 48;
            this.groupBox2.TabStop = false;
            this.groupBox2.Text = "Scale";
            // 
            // groupBox3
            // 
            this.groupBox3.Controls.Add(this.label18);
            this.groupBox3.Controls.Add(this.label17);
            this.groupBox3.Controls.Add(this.txtData2);
            this.groupBox3.Controls.Add(this.label16);
            this.groupBox3.Controls.Add(this.label4);
            this.groupBox3.Controls.Add(this.txtMolecules);
            this.groupBox3.Controls.Add(this.label15);
            this.groupBox3.Controls.Add(this.txtFormula);
            this.groupBox3.Controls.Add(this.label14);
            this.groupBox3.Controls.Add(this.txtMass);
            this.groupBox3.Controls.Add(this.label13);
            this.groupBox3.Controls.Add(this.label5);
            this.groupBox3.Controls.Add(this.label12);
            this.groupBox3.Controls.Add(this.txtMoleculesSci);
            this.groupBox3.Controls.Add(this.label11);
            this.groupBox3.Controls.Add(this.label6);
            this.groupBox3.Controls.Add(this.label10);
            this.groupBox3.Controls.Add(this.txtMoles);
            this.groupBox3.Controls.Add(this.label9);
            this.groupBox3.Controls.Add(this.label7);
            this.groupBox3.Controls.Add(this.label8);
            this.groupBox3.Controls.Add(this.txtOne);
            this.groupBox3.Controls.Add(this.label3);
            this.groupBox3.Controls.Add(this.txtThousand);
            this.groupBox3.Controls.Add(this.txtSeptillion);
            this.groupBox3.Controls.Add(this.txtMillion);
            this.groupBox3.Controls.Add(this.txtSextillion);
            this.groupBox3.Controls.Add(this.txtBillion);
            this.groupBox3.Controls.Add(this.txtQuintillion);
            this.groupBox3.Controls.Add(this.txtTrillion);
            this.groupBox3.Controls.Add(this.txtQuadrillion);
            this.groupBox3.Location = new System.Drawing.Point(12, 123);
            this.groupBox3.Name = "groupBox3";
            this.groupBox3.Size = new System.Drawing.Size(516, 285);
            this.groupBox3.TabIndex = 49;
            this.groupBox3.TabStop = false;
            this.groupBox3.Text = "Chemistry!";
            // 
            // label18
            // 
            this.label18.AutoSize = true;
            this.label18.Location = new System.Drawing.Point(465, 78);
            this.label18.Name = "label18";
            this.label18.Size = new System.Drawing.Size(47, 20);
            this.label18.TabIndex = 52;
            this.label18.Text = "g/mol";
            // 
            // label17
            // 
            this.label17.AutoSize = true;
            this.label17.Location = new System.Drawing.Point(363, 110);
            this.label17.Name = "label17";
            this.label17.Size = new System.Drawing.Size(104, 20);
            this.label17.TabIndex = 51;
            this.label17.Text = "*   6.022×10²³";
            // 
            // txtData2
            // 
            this.txtData2.Location = new System.Drawing.Point(174, 75);
            this.txtData2.Name = "txtData2";
            this.txtData2.ReadOnly = true;
            this.txtData2.Size = new System.Drawing.Size(183, 26);
            this.txtData2.TabIndex = 50;
            // 
            // label16
            // 
            this.label16.AutoSize = true;
            this.label16.Location = new System.Drawing.Point(363, 78);
            this.label16.Name = "label16";
            this.label16.Size = new System.Drawing.Size(13, 20);
            this.label16.TabIndex = 48;
            this.label16.Text = "/";
            // 
            // btnHold
            // 
            this.btnHold.Location = new System.Drawing.Point(77, 25);
            this.btnHold.Name = "btnHold";
            this.btnHold.Size = new System.Drawing.Size(80, 28);
            this.btnHold.TabIndex = 21;
            this.btnHold.Text = "Hold";
            this.btnHold.UseVisualStyleBackColor = true;
            this.btnHold.Click += new System.EventHandler(this.bthHold_Click);
            // 
            // MainForm
            // 
            this.ClientSize = new System.Drawing.Size(538, 418);
            this.Controls.Add(this.groupBox2);
            this.Controls.Add(this.groupBox1);
            this.Controls.Add(this.groupBox3);
            this.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Name = "MainForm";
            this.Text = "Mole Scale";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.groupBox1.ResumeLayout(false);
            this.groupBox1.PerformLayout();
            this.groupBox2.ResumeLayout(false);
            this.groupBox2.PerformLayout();
            this.groupBox3.ResumeLayout(false);
            this.groupBox3.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion

        private System.IO.Ports.SerialPort serialPort1;
        private System.Windows.Forms.ComboBox comboBox1;
        private System.Windows.Forms.ComboBox comboBox2;
        private System.Windows.Forms.TextBox textBox1;
        private System.Windows.Forms.TextBox textBox2;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.RichTextBox richTextBox1;
        private System.Windows.Forms.Button button2;
        private System.Windows.Forms.Button button3;
        private System.IO.Ports.SerialPort serialPort2;
        private System.Windows.Forms.Button btnConnect;
        private System.Windows.Forms.ComboBox cmbPortName;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.TextBox txtData;
        private System.Windows.Forms.Button btnTare;
        private System.Windows.Forms.Button btnRefresh;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.Button btnCalibrate;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.TextBox txtFormula;
        private System.Windows.Forms.TextBox txtMass;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.Label label6;
        private System.Windows.Forms.TextBox txtMoleculesSci;
        private System.Windows.Forms.Label label7;
        private System.Windows.Forms.TextBox txtMoles;
        private System.Windows.Forms.TextBox txtOne;
        private System.Windows.Forms.TextBox txtThousand;
        private System.Windows.Forms.TextBox txtMillion;
        private System.Windows.Forms.TextBox txtBillion;
        private System.Windows.Forms.TextBox txtTrillion;
        private System.Windows.Forms.TextBox txtQuadrillion;
        private System.Windows.Forms.TextBox txtQuintillion;
        private System.Windows.Forms.TextBox txtSextillion;
        private System.Windows.Forms.TextBox txtSeptillion;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label label8;
        private System.Windows.Forms.Label label9;
        private System.Windows.Forms.Label label10;
        private System.Windows.Forms.Label label11;
        private System.Windows.Forms.Label label12;
        private System.Windows.Forms.Label label13;
        private System.Windows.Forms.Label label14;
        private System.Windows.Forms.Label label15;
        private System.Windows.Forms.TextBox txtMolecules;
        private System.Windows.Forms.GroupBox groupBox2;
        private System.Windows.Forms.GroupBox groupBox3;
        private System.Windows.Forms.Label label17;
        private System.Windows.Forms.TextBox txtData2;
        private System.Windows.Forms.Label label16;
        private System.Windows.Forms.Label label18;
        private System.Windows.Forms.Button btnHold;
    }
}

