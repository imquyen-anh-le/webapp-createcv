namespace TestAPI0501.Models
{
    public class TemplateLetter
    {
        public int idtemp { get; set; }
        public int idind { get; set; }
        public required string nametemp { get; set; }
        public required string heading { get; set; }
        public required string content { get; set; }
        public required string initial { get; set; }

    }
}
