namespace TestAPI0501.Models
{
    public class ProjectsTMP
    {
        public int project_id { get; set; }
        public int idcv { get; set; }
        public required string project_name { get; set; }
        public required string client { get; set; }
        public required string time { get; set; }
        public required string descriptions { get; set; }
        public int number_of_members { get; set; }
        public required string position { get; set; }
        public required string responsibilities { get; set; }
        public required string technology_in_use { get; set; }
        public required string container { get; set; }
        public required string name_title { get; set; }
        public required string client_lable { get; set; }
        public required string des_lable { get; set; }
        public required string nom_lable { get; set; }
        public required string pos_lable { get; set; }
        public required string respon_lable { get; set; }
        public required string techuse_lable { get; set; }
    }
}
