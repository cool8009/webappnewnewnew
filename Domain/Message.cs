using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Message
    {
        [ForeignKey("UserId")]
        public virtual User User { get; set; }
        public string UserId { get; set; }
        public Guid MessageId { get; set; }
        public string Content { get; set; }
        public DateTime DateSent { get; set; }

    }
}