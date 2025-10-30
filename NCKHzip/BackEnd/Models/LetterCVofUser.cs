namespace TestAPI0501.Models
{
    public class LetterCVofUser
    {
        public int mail_id { get; set; }
        public int userid { get; set; }
        public required string head { get; set; }
        public required string content { get; set; }
        public required string signatureLetter { get; set; }
        public required string font_size { get; set; }
        public required string font_family{ get; set; }
    }
}
