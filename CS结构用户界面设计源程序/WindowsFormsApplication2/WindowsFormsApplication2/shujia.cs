using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApplication2
{
    public partial class shujia : Form
    {
        public shujia()
        {
            InitializeComponent();
        }

        private void shujia_Load(object sender, EventArgs e)
        {

        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {
            chaofan c = new chaofan();
            c.ShowDialog();
        }

        private void label1_Click(object sender, EventArgs e)
        {
            chaofan s = new chaofan();
            s.Show();
        }
    }
}
