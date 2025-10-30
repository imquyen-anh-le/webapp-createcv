namespace TestAPI0501.Models
{
    public class Language
    {
        public int lang_id { get; set; }
        public int idcv { get; set; }
        public required string language_name { get; set; }
        public required string level { get; set; }
        public required string content { get; set; }
        public required string container { get; set; }
        public required string name_title { get; set; }
    }
}
