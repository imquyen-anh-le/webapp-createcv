namespace TestAPI0501.Models
{
    public class WorkExperienceTMP
    {
        public int experience_id { get; set; }
        public int idcv { get; set; }
        public required string company_name { get; set; }
        public required string position { get; set; }
        public required string time { get; set; }
        public required string content { get; set; }
        public required string container { get; set; }
        public required string name_title { get; set; }
    }
}
