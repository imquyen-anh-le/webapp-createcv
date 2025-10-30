namespace TestAPI0501.Models
{
    public class ProfileUser
    {
        public int profileid { get; set; }
        public int idcv { get; set; }
        public required string fullname { get; set; }
        public required string position { get; set; }
        public required string container { get; set; }
    }
}
