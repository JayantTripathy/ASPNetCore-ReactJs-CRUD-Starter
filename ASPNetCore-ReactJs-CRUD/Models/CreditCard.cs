using System.ComponentModel.DataAnnotations;

namespace ASPNetCore_ReactJs_CRUD.Models
{
    public class CreditCard
    {
        [Key]
        public int Id { get; set; }
        public string CardNumber { get; set; }
        public string CardName { get; set; }
        public string CardCvv { get; set; }
        public string ValidFromDateMonth { get; set; }
        public string ValidFromDateYear { get; set; }
        public string ValidExpiryDateMonth { get; set; }
        public string ValidExpiryDateYear { get; set; }
        public int? CreatedBy { get; set; }
        public int? UpdatedBy { get; set; }
        public DateTime? CreatedOn { get; set; }
        public DateTime? UpdatedOn { get; set; }
    }
}
