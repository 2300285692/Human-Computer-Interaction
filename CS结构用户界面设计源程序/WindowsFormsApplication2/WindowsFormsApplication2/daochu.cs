using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Management;
namespace WindowsFormsApplication2
{
    public partial class daochu : Form
    {
        public daochu()
        {
            InitializeComponent();
        }
private void daochu_Load(object sender, EventArgs e)
        {
        
        }

        private void button5_Click(object sender, EventArgs e)
        {
            MessageBox.Show("书名："+textBox3.Text+'\n'+"地址："+textBox4.Text);
            this.Close();
        }

        private void button6_Click(object sender, EventArgs e)
        {
            textBox3.Text = "";
            textBox4.Text = "";
        }

        private void button4_Click(object sender, EventArgs e)
        {
            if(folderBrowserDialog2.ShowDialog() == DialogResult.OK)
            {
                textBox4.Text = folderBrowserDialog2.SelectedPath;
            }
        }
    }

    }

