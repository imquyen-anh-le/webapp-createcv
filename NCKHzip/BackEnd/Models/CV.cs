namespace TestAPI0501.Models
{
    public class CV
    {
        // đây 
        public int idcv { get; set; }
        public int Userid { get; set; }
        public required string modelCV { get; set; }
        public required string color { get; set; }

        public required string font { get; set; }
        public required string fontSize { get; set; }
    }
}
