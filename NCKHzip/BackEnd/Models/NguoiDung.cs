namespace TestAPI0501.Models
{
    public class NguoiDung
    {
        public int UserId { get; set; }
        public required string Name { get; set; }
        public required string Email { get; set;}
        public required string Password { get; set;}
        public required string Role { get; set; }
    }
}
