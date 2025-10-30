namespace TestAPI0501.Models
{
    public class Education
    {
        public int education_id { get; set; }
        public int idcv { get; set; }
        public required string school_name { get; set; }
        public required string time { get; set; }
        public required string content { get; set; }
        public required string container { get; set; }
        public required string name_title { get; set; }
    }
}
