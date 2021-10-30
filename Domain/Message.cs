using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Message
    {
        public int MessageId { get; set; }
        public string Content { get; set; }
        public DateTime DateSent { get; set; }

    }
}