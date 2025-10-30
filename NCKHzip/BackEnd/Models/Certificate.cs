namespace TestAPI0501.Models
{
    public class Certificate
    {
        public int cer_id { get; set; }
        public int idcv { get; set; }
        public required string time { get; set; }
        public required string content { get; set; }
        public required string container { get; set; }
        public required string name_title { get; set; }
    }
}
