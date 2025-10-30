namespace TestAPI0501.Models
{
    public class FullDetailCV
    {
        public CV? CV { get; set; }
        public ProfileUser? Profile { get; set; }
        public Information? Information { get; set; }
        public List<OverView> Overviews { get; set; } = new List<OverView>();
        public List<Workexperience> WorkExperiences { get; set; } = new List<Workexperience>();
        public List<Education> Educations { get; set; } = new List<Education>();
        public List<Skill> Skills { get; set; } = new List<Skill>();
        public List<Projects> Projects { get; set; } = new List<Projects>();
        public List<Awards> Awards { get; set; } = new List<Awards>();
        public List<Goals> Goals { get; set; } = new List<Goals>();
        public List<Certificate> Certificates { get; set; } = new List<Certificate>();
        public List<Language> Languages { get; set; } = new List<Language>();
        public List<AnotherPart> anothers { get; set; } = new List<AnotherPart>();
    }
}
