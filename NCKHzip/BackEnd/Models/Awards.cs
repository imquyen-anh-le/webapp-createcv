namespace TestAPI0501.Models
{
    public class Awards
    {
        public int award_id { get; set; }
        public int idcv { get; set; }
        public required string award_name { get; set; }
        public required string time { get; set; }
        public required string content { get; set; }
        public required string container { get; set; }
        public required string name_title { get; set; }
    }
}
