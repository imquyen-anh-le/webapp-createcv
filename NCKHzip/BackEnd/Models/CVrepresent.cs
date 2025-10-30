namespace TestAPI0501.Models
{
    public class CVrepresent
    {
        public int idcv { get; set; }
        public int Userid { get; set; }
        public required string modelCV { get; set; }
        public required string fullname { get; set; }
        public required string position { get; set; }
        public required string img { get; set; }

    }
}
