using Dapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Numerics;
using System.Xml.Linq;
using TestAPI0501.Models;

namespace TestAPI0501.Repository
{
    public class NguoiDungRepository : INguoiDungRepository
    {
        private readonly IConfiguration _configuration;

        public NguoiDungRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        private IDbConnection GetNguoiDungConnection()
        {
            return new SqlConnection(_configuration.GetConnectionString("NguoiDungDB"));
        }
        private IDbConnection GetLetterCVConnection()
        {
            return new SqlConnection(_configuration.GetConnectionString("LetterCVDB"));
        }
        //private SqlConnection GetConnection()
        //{
        //    return new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
        //}
        public async Task AddAsync(NguoiDung user)
        {
            using var connection = GetNguoiDungConnection();
            var query = "Insert into Users([name],email,[password],[role]) values(@Name,@Email,@Password,@Role); Select cast(Scope_identity() as int)";
            var newuserid = await connection.QuerySingleAsync<int>(query, user);
            user.UserId = newuserid;
        }
        public async Task DeleteAsync(int userid)
        {
            using var connection = GetNguoiDungConnection();
            await connection.ExecuteAsync("Delete Users Where UserId = @UserId", new { UserId = userid });
        }
        public async Task<List<NguoiDung>> GetAllAsync()
        {
            using var connection = GetNguoiDungConnection();
            var user = await connection.QueryAsync<NguoiDung>("Select * from Users");
            return user.ToList();
        }
        // Lấy ra tất cả CV hiện tại 
        public async Task<List<CV>> GetAllCVAsync()
        {
            using var connection = GetNguoiDungConnection();
            var cv = await connection.QueryAsync<CV>("Select * from CV");
            return cv.ToList();
        }
        public async Task<NguoiDung> GetByIdAsync(int userid)
        {
            using var connection = GetNguoiDungConnection();
                connection.Open();
                var user = await connection.QueryFirstOrDefaultAsync<NguoiDung>("Select * from Users where UserId = @UserId", new { UserId = userid });
                return user;
        }
        public async Task<NguoiDung> GetByEmailAsync(string email)
        {
            using var connection = GetNguoiDungConnection();
            connection.Open();
            var user = await connection.QueryFirstOrDefaultAsync<NguoiDung>("Select * from Users where Email = @Email", new { Email = email });
            return user;
        }
        public async Task UpdateAsync(NguoiDung user)
        {
            using var connection = GetNguoiDungConnection();
            await connection.ExecuteAsync("Update Users Set Name = @Name , Email = @Email,Password = @Password,Role = @Role where UserId = @UserId", user);
        }
        // Lấy ra tất cả CV của người dùng có userid == X 
        public async Task<List<CVrepresent>> GetCVofUsers(int userid)
        {
            using var connection = GetNguoiDungConnection();
            var cv = await connection.QueryAsync<CVrepresent>("select * from CV as c join information as i4 on i4.idcv = c.idcv join UserProfile as u on c.idcv  = u.idcv join Uploadimg as img on img.in4id = i4.in4id where c.UserId = @UserId", new { UserId = userid });
            return cv.ToList();
        }
        // Thêm Dữ Liệu Của Các Phần Vào Trong CV 
        public async Task AddPU_Async(ProfileUser pu)
        {
            using var connection = GetNguoiDungConnection();
            var query = "Insert into UserProfile(idcv,fullname,position,container) values(@idcv,@fullname,@position,@container); Select cast(Scope_identity() as int)";
            var newpuid = await connection.QuerySingleAsync<int>(query, pu);
            pu.profileid = newpuid;
        }   
        public async Task AddOV_Async(OverView ov)
        {
            using var connection = GetNguoiDungConnection();
            var query = "Insert into overView(idcv,contentOverView,container,name_title) values(@idcv,@contentOverView,@container,@name_title); Select cast(Scope_identity() as int)";
            var newovid = await connection.QuerySingleAsync<int>(query, ov);
            ov.overview_id = newovid;
        }
        public async Task AddED_Async(Education ed)
        {
            using var connection = GetNguoiDungConnection();
            var query = "Insert into Education(idcv,school_name,[time],content,container,name_title) values(@idcv,@school_name,@time,@content,@container,@name_title); Select cast(Scope_identity() as int)";
            var newedid = await connection.QuerySingleAsync<int>(query, ed);
            ed.education_id = newedid;
        }
        public async Task AddWE_Async(Workexperience we)
        {
            using var connection = GetNguoiDungConnection();
            var query = "Insert into WorkExperience(idcv,company_name,position,[time],content,container,name_title) values(@idcv,@company_name,@position,@time,@content,@container,@name_title); Select cast(Scope_identity() as int)";
            var newweid = await connection.QuerySingleAsync<int>(query, we);
            we.experience_id = newweid;
        }
        public async Task AddSK_Async(Skill sk)
        {
            using var connection = GetNguoiDungConnection();
            var query = "Insert into Skill(idcv,skill_name,content,container,name_title) values(@idcv,@skill_name,@content,@container,@name_title); Select cast(Scope_identity() as int)";
            var newskid = await connection.QuerySingleAsync<int>(query, sk);
            sk.skill_id = newskid;
        }
        public async Task AddPR_Async(Projects pr)
        {
            using var connection = GetNguoiDungConnection();
            var query = "Insert into Projects(idcv,project_name,client,[time],descriptions,number_of_members,position,responsibilities,technology_in_use,container,name_title,client_lable,des_lable,nom_lable,pos_lable,respon_lable,techuse_lable) values(@idcv,@project_name,@client,@time,@descriptions,@number_of_members,@position,@responsibilities,@technology_in_use,@container,@name_title,@client_lable,@des_lable,@nom_lable,@pos_lable,@respon_lable,@techuse_lable); Select cast(Scope_identity() as int)";
            var newprid = await connection.QuerySingleAsync<int>(query, pr);
            pr.project_id = newprid;
        }
        public async Task AddAW_Async(Awards aw)
        {
            using var connection = GetNguoiDungConnection();
            var query = "Insert into Awards(idcv,award_name,[time],content,container,name_title) values(@idcv,@award_name,@time,@content,@container,@name_title); Select cast(Scope_identity() as int)";
            var newawid = await connection.QuerySingleAsync<int>(query, aw);
            aw.award_id = newawid;
        }
        public async Task AddLG_Async(Language lg)
        {
            using var connection = GetNguoiDungConnection();
            var query = "Insert into Language(idcv,language_name,[level],content,container,name_title) values(@idcv,@language_name,@level,@content,@container,@name_title); Select cast(Scope_identity() as int)";
            var newlgid = await connection.QuerySingleAsync<int>(query, lg);
            lg.lang_id = newlgid;
        }
        public async Task AddGO_Async(Goals go)
        {
            using var connection = GetNguoiDungConnection();
            var query = "Insert into Goals(idcv,term,content,container,name_title) values(@idcv,@term,@content,@container,@name_title); Select cast(Scope_identity() as int)";
            var newgoid = await connection.QuerySingleAsync<int>(query, go);
            go.goal_id = newgoid;
        }
        public async Task AddCER_Async(Certificate cer)
        {
            using var connection = GetNguoiDungConnection();
            var query = "Insert into Certificate(idcv,[time],content,container,name_title) values(@idcv,@time,@content,@container,@name_title); Select cast(Scope_identity() as int)";
            var newcerid = await connection.QuerySingleAsync<int>(query, cer);
            cer.cer_id = newcerid;
        }
        public async Task AddAP_Async(AnotherPart ap)
        {
            using var connection = GetNguoiDungConnection();
            var query = "Insert into AnotherPart(idcv,name_part,title,content,container,name_title) values(@idcv,@name_part,@title,@content,@container,@name_title); Select cast(Scope_identity() as int)";
            var newapid = await connection.QuerySingleAsync<int>(query, ap);
            ap.anotherpart_id = newapid;
        }
        public async Task<int> AddCV_Async(CV cv)
        {
            using var connection = GetNguoiDungConnection();
            var query = "insert into CV(UserId,modelCV,color,font,fontSize) values(@UserId,@modelCV,@color,@font,@fontSize); Select cast(Scope_identity() as int)";
            var newin4cvid = await connection.QuerySingleAsync<int>(query, cv);
            cv.idcv = newin4cvid;
            return newin4cvid;
        }
        public async Task ADDI4_Async(Information i4)
        {
            using var connection = GetNguoiDungConnection();
            var query = "Insert into Information(idcv,phone,[address],github,email,birth,imgSize,container,phonelabel,addresslabel,githublabel,emaillabel,birthlabel) values(@idcv,@phone,@address,@github,@email,@birth,@imgSize,@container,@phonelabel,@addresslabel,@githublabel,@emaillabel,@birthlabel); Select cast(Scope_identity() as int)";
            var newi4id = await connection.QuerySingleAsync<int>(query, i4);
            i4.in4id = newi4id;
        }
        // Lấy Ra CV 
        public async Task<FullDetailCV?> GetFullCVDetailsByUserAsync(int userid, int idcv)
        {
            using var connection = GetNguoiDungConnection();
            connection.Open();
            var query = @"
                SELECT * FROM CV WHERE UserId = @userid AND idcv = @idcv;
                SELECT * FROM UserProfile WHERE idcv = @idcv;
                SELECT * FROM Information WHERE idcv = @idcv;
                SELECT * FROM OverView WHERE idcv = @idcv;
                SELECT * FROM WorkExperience WHERE idcv = @idcv;
                SELECT * FROM Education WHERE idcv = @idcv;
                SELECT * FROM Skill WHERE idcv = @idcv;
                SELECT * FROM Projects WHERE idcv = @idcv;
                SELECT * FROM Awards WHERE idcv = @idcv;
                SELECT * FROM Goals WHERE idcv = @idcv;
                SELECT * FROM [Certificate] WHERE idcv = @idcv;
                SELECT * FROM [Language] WHERE idcv = @idcv;
                SELECT * FROM AnotherPart WHERE idcv = @idcv;
            ";

            using var multi = await connection.QueryMultipleAsync(query, new { userid, idcv });
            var cv = await multi.ReadSingleOrDefaultAsync<CV>();
            if (cv == null) return null;
            var fullDetailCV = new FullDetailCV
            {
                CV = cv,
                Profile = await multi.ReadSingleOrDefaultAsync<ProfileUser>(),
                Information = await multi.ReadSingleOrDefaultAsync<Information>(),
                Overviews = (await multi.ReadAsync<OverView>()).ToList(),
                WorkExperiences = (await multi.ReadAsync<Workexperience>()).ToList(),
                Educations = (await multi.ReadAsync<Education>()).ToList(),
                Skills = (await multi.ReadAsync<Skill>()).ToList(),
                Projects = (await multi.ReadAsync<Projects>()).ToList(),
                Awards = (await multi.ReadAsync<Awards>()).ToList(),
                Goals = (await multi.ReadAsync<Goals>()).ToList(),
                Certificates = (await multi.ReadAsync<Certificate>()).ToList(),
                Languages = (await multi.ReadAsync<Language>()).ToList(),
                anothers = (await multi.ReadAsync<AnotherPart>()).ToList(),
            };
            return fullDetailCV;
        }
        // UP ảnh lên sever 
        public async Task AddImageAsync(UploadIMG image)
        {
            Console.WriteLine($"Thêm ảnh với in4id: {image.in4id}");
            using var connection = GetNguoiDungConnection();
            var query = "INSERT INTO Uploadimg(in4id, img) VALUES (@in4Id, @img) ; Select cast(Scope_identity() as int)";
            var newImageId = await connection.QuerySingleAsync<int>(query, image);
            image.idimg = newImageId;
        }

        public async Task<UploadIMG> GetImgByIdin4Async(int in4id)
        {
            using var connection = GetNguoiDungConnection();
            connection.Open();
            var cv = await connection.QueryFirstOrDefaultAsync<UploadIMG>("select * from Uploadimg where in4id = @In4id", new { In4id = in4id });
            return cv;
        }
        public async Task<UploadIMG> GetIn4idByIdCVAsync(int idcv)
        {
            using var connection = GetNguoiDungConnection();
            connection.Open();
            var in4id = await connection.QueryFirstOrDefaultAsync<UploadIMG>("select in4id from CV as cv join Information as i on cv.idcv = i .idcv where cv.idcv = @Idcv", new { Idcv = idcv });
            return in4id;
        }

        // Update cv ---------------------------------------------------------------------------- 
        public async Task<bool> UpdateFullDetailCVAsync(int userid, int idcv, FullDetailCV fullDetailCV)
        {
            using var connection = GetNguoiDungConnection();
            connection.Open();
            using var transaction = connection.BeginTransaction();

            try
            {
                var queryCV = @"
                UPDATE CV 
                SET modelCV = @modelCV, 
                color = @color,
                font = @font,
                fontSize = @fontSize
                WHERE UserId = @UserId and idcv = @IdCV";

                var affectedRowsCV = await connection.ExecuteAsync(queryCV, new
                {
                    Userid = userid,
                    Idcv = idcv,
                    modelCV = fullDetailCV.CV?.modelCV,
                    color = fullDetailCV.CV?.color,
                    font = fullDetailCV.CV?.font,
                    fontSize = fullDetailCV.CV?.fontSize
                }, transaction);

                if (affectedRowsCV == 0)
                {
                    transaction.Rollback();
                    return false;
                }

                // Update Profile
                var queryProfile = @"
                UPDATE UserProfile 
                SET fullname = @fullname, 
                position = @position,
                container = @container
                WHERE idcv = @IdCV;";

                await connection.ExecuteAsync(queryProfile, new
                {
                    IdCV = idcv,
                    fullname = fullDetailCV.Profile?.fullname,
                    position = fullDetailCV.Profile?.position,
                    container = fullDetailCV.Profile?.container

                }, transaction);

                var queryin4 = @"
                    update Information 
                    set 
                    phone = @phone,
                    [address] = @address,
                    github = @github,
                    email = @email,
                    birth = @birth,
                    imgSize = @imgSize,
                    container = @container,
                    phonelabel = @phonelabel,
                    addresslabel = @addresslabel,
                    githublabel = @githublabel,
                    emaillabel = @emaillabel,
                    birthlabel = @birthlabel
                    where idcv = @IdCV
                ";
                await connection.ExecuteAsync(queryin4, new
                {
                    IdCV = idcv,
                    phone = fullDetailCV.Information?.phone,
                    address = fullDetailCV.Information?.address,
                    github = fullDetailCV.Information?.github,
                    email = fullDetailCV.Information?.email,
                    birth = fullDetailCV.Information?.birth,
                    imgSize = fullDetailCV.Information?.imgSize,
                    container = fullDetailCV.Information?.container,
                    phonelabel = fullDetailCV.Information?.phonelabel,
                    addresslabel = fullDetailCV.Information?.addresslabel,
                    githublabel = fullDetailCV.Information?.githublabel,
                    emaillabel = fullDetailCV.Information?.emaillabel,
                    birthlabel = fullDetailCV.Information?.birthlabel
                }, transaction);
                // 
                transaction.Commit();
                return true;
            }
            catch (Exception)
            {
                transaction.Rollback();
                throw;
            }
        }
        public async Task<bool> UpdateUpimg(int in4id, UploadIMG upimg)
        {
            using var connection = GetNguoiDungConnection();
            var affectedRows = await connection.ExecuteAsync("Update Uploadimg Set img = @img WHERE in4id = @in4id", new {
                in4id = in4id,
                img = upimg.img
            });
            return affectedRows > 0;
        }

        // Xóa CV 
        public async Task<bool> DeleteFullDetailCVAsync(int idcv, int in4id)
        {
            using var connection = GetNguoiDungConnection();
            connection.Open();
            using var transaction = connection.BeginTransaction();

            try
            {
                // Delete UploadIMg
                var queryimg = "DELETE FROM Uploadimg WHERE in4id = @In4id";
                await connection.ExecuteAsync(queryimg, new { In4id = in4id }, transaction);

                // Delete UserProfile
                var queryProfile = "DELETE FROM UserProfile WHERE idcv = @IdCV";
                await connection.ExecuteAsync(queryProfile, new { IdCV = idcv }, transaction);

                // Delete Information
                var queryIn4 = "DELETE FROM Information WHERE idcv = @IdCV";
                await connection.ExecuteAsync(queryIn4, new { IdCV = idcv }, transaction);

                // Delete Overviews
                var queryOverviews = "DELETE FROM OverView WHERE idcv = @IdCV";
                await connection.ExecuteAsync(queryOverviews, new { IdCV = idcv }, transaction);

                // Delete WorkExperience
                var queryWorkExperience = "DELETE FROM WorkExperience WHERE idcv = @IdCV";
                await connection.ExecuteAsync(queryWorkExperience, new { IdCV = idcv }, transaction);

                // Delete Education
                var queryEducation = "DELETE FROM Education WHERE idcv = @IdCV";
                await connection.ExecuteAsync(queryEducation, new { IdCV = idcv }, transaction);

                // Delete AnotherPart
                var queryAnotherPart = "DELETE FROM AnotherPart WHERE idcv = @IdCV";
                await connection.ExecuteAsync(queryAnotherPart, new { IdCV = idcv }, transaction);

                // Delete Awards
                var queryAwards = "DELETE FROM Awards WHERE idcv = @IdCV";
                await connection.ExecuteAsync(queryAwards, new { IdCV = idcv }, transaction);

                // Delete Certificate
                var queryCertificate = "DELETE FROM Certificate WHERE idcv = @IdCV";
                await connection.ExecuteAsync(queryCertificate, new { IdCV = idcv }, transaction);

                // Delete Goals
                var queryGoals = "DELETE FROM Goals WHERE idcv = @IdCV";
                await connection.ExecuteAsync(queryGoals, new { IdCV = idcv }, transaction);

                // Delete Language
                var queryLanguage = "DELETE FROM Language WHERE idcv = @IdCV";  
                await connection.ExecuteAsync(queryLanguage, new { IdCV = idcv }, transaction);

                // Delete Skill
                var querySkill = "DELETE FROM Skill WHERE idcv = @IdCV";
                await connection.ExecuteAsync(querySkill, new { IdCV = idcv }, transaction);

                // Delete Projects
                var queryProjects = "DELETE FROM Projects WHERE idcv = @IdCV";
                await connection.ExecuteAsync(queryProjects, new { IdCV = idcv }, transaction);

                // Delete CV
                var queryCV = "DELETE FROM CV WHERE idcv = @IdCV";
                await connection.ExecuteAsync(queryCV, new { IdCV = idcv }, transaction);

                transaction.Commit();
                return true;
            }
            catch (Exception)
            {
                transaction.Rollback();
                throw;
            }
        }

        // Đổi Mật Khẩu & đổi tên user 
        public async Task<bool> DeleteCVAsync(int idcv)
        {
            using var connection = GetNguoiDungConnection();
            var rowsAffected = await connection.ExecuteAsync("DELETE FROM CV WHERE idcv = @IdCV", new { IdCV = idcv });
            return rowsAffected > 0;
        }
        public async Task<bool> DeleteInformationAsync(int idcv)
        {
            using var connection = GetNguoiDungConnection();
            var rowsAffected = await connection.ExecuteAsync("DELETE FROM Information WHERE idcv = @IdCV", new { IdCV = idcv });
            return rowsAffected > 0;
        }
        public async Task<bool> DeleteUserProfileAsync(int idcv)
        {
            using var connection = GetNguoiDungConnection();
            var rowsAffected = await connection.ExecuteAsync("DELETE FROM UserProfile WHERE idcv = @IdCV", new { IdCV = idcv });
            return rowsAffected > 0;
        }
        public async Task<bool> DeleteUploadimgAsync(int in4id)
        {
            using var connection = GetNguoiDungConnection();
            var rowsAffected = await connection.ExecuteAsync("DELETE FROM Uploadimg WHERE in4id = @In4id", new { In4id = in4id });
            return rowsAffected > 0;
        }
        public async Task<bool> DeleteOverViewAsync(int idcv)
        {
            using var connection = GetNguoiDungConnection();
            var rowsAffected = await connection.ExecuteAsync("DELETE FROM overView WHERE idcv = @IdCV", new { IdCV = idcv });
            return rowsAffected > 0;
        }
        public async Task<bool> DeleteWorkExperienceAsync(int idcv)
        {
            using var connection = GetNguoiDungConnection();
            var rowsAffected = await connection.ExecuteAsync("DELETE FROM WorkExperience WHERE idcv = @IdCV", new { IdCV = idcv });
            return rowsAffected > 0;
        }
        public async Task<bool> DeleteEducationAsync(int idcv)
        {
            using var connection = GetNguoiDungConnection();
            var rowsAffected = await connection.ExecuteAsync("DELETE FROM Education WHERE idcv = @IdCV", new { IdCV = idcv });
            return rowsAffected > 0;
        }
        public async Task<bool> DeleteSkillAsync(int idcv)
        {
            using var connection = GetNguoiDungConnection();
            var rowsAffected = await connection.ExecuteAsync("DELETE FROM Skill WHERE idcv = @IdCV", new { IdCV = idcv });
            return rowsAffected > 0;
        }
        public async Task<bool> DeleteProjectsAsync(int idcv)
        {
            using var connection = GetNguoiDungConnection();
            var rowsAffected = await connection.ExecuteAsync("DELETE FROM Projects WHERE idcv = @IdCV", new { IdCV = idcv });
            return rowsAffected > 0;
        }
        public async Task<bool> DeleteAwardsAsync(int idcv)
        {
            using var connection = GetNguoiDungConnection();
            var rowsAffected = await connection.ExecuteAsync("DELETE FROM Awards WHERE idcv = @IdCV", new { IdCV = idcv });
            return rowsAffected > 0;
        }
        public async Task<bool> DeleteGoalsAsync(int idcv)
        {
            using var connection = GetNguoiDungConnection();
            var rowsAffected = await connection.ExecuteAsync("DELETE FROM Goals WHERE idcv = @IdCV", new { IdCV = idcv });
            return rowsAffected > 0;    
        }
        public async Task<bool> DeleteCertificateAsync(int idcv)
        {
            using var connection = GetNguoiDungConnection();
            var rowsAffected = await connection.ExecuteAsync("DELETE FROM [Certificate] WHERE idcv = @IdCV", new { IdCV = idcv });
            return rowsAffected > 0;
        }
        public async Task<bool> DeleteLanguageAsync(int idcv)
        {
            using var connection = GetNguoiDungConnection();
            var rowsAffected = await connection.ExecuteAsync("DELETE FROM [Language] WHERE idcv = @IdCV", new { IdCV = idcv });
            return rowsAffected > 0;
        }
        public async Task<bool> DeleteAnotherPartAsync(int idcv)
        {
            using var connection = GetNguoiDungConnection();
            var rowsAffected = await connection.ExecuteAsync("DELETE FROM AnotherPart WHERE idcv = @IdCV", new { IdCV = idcv });
            return rowsAffected > 0;
        }

        // Các bảng tmp sử dụng để update 
        public async Task AddOVTMP_Async(OverviewTMP ov)
        {
            using var connection = GetNguoiDungConnection();
            var query = "Insert into OverviewTMP(overview_id,idcv,contentOverView,container,name_title) values(@overview_id,@idcv,@contentOverView,@container,@name_title);";
            await connection.ExecuteAsync(query, ov);
        }
        public async Task AddEDTMP_Async(EducationTMP ed)
        {
            using var connection = GetNguoiDungConnection();
            var query = "Insert into EducationTMP(education_id,idcv,school_name,[time],content,container,name_title) values(@education_id,@idcv,@school_name,@time,@content,@container,@name_title);";
            await connection.ExecuteAsync(query, ed);
        }
        public async Task AddWETMP_Async(WorkExperienceTMP we)
        {
            using var connection = GetNguoiDungConnection();
            var query = "Insert into WorkExperienceTMP(experience_id,idcv,company_name,position,[time],content,container,name_title) values(@experience_id,@idcv,@company_name,@position,@time,@content,@container,@name_title);";
            await connection.ExecuteAsync(query, we);
        }
        public async Task AddSKTMP_Async(SkillTMP sk)
        {
            using var connection = GetNguoiDungConnection();
            var query = "Insert into SkillTMP(skill_id,idcv,skill_name,content,container,name_title) values(@skill_id,@idcv,@skill_name,@content,@container,@name_title);";
            await connection.ExecuteAsync(query, sk);
        }
        public async Task AddPRTMP_Async(ProjectsTMP pr)
        {
            using var connection = GetNguoiDungConnection();
            var query = "Insert into Projects(idcv,project_name,client,[time],descriptions,number_of_members,position,responsibilities,technology_in_use,container,name_title,client_lable,des_lable,nom_lable,pos_lable,respon_lable,techuse_lable) values(@idcv,@project_name,@client,@time,@descriptions,@number_of_members,@position,@responsibilities,@technology_in_use,@container,@name_title,@client_lable,@des_lable,@nom_lable,@pos_lable,@respon_lable,@techuse_lable); Select cast(Scope_identity() as int)";
            await connection.ExecuteAsync(query, pr);
        }   
        public async Task AddAWTMP_Async(AwardsTMP Awards)
        {
            using var connection = GetNguoiDungConnection();
            var query = "Insert into AwardsTMP(award_id,idcv,award_name,[time],content,container,name_title) values(@award_id,@idcv,@award_name,@time,@content,@container,@name_title);";
            await connection.ExecuteAsync(query, Awards);
        }
        public async Task AddLGTMP_Async(LanguageTMP lg)
        {
            using var connection = GetNguoiDungConnection();
            var query = "Insert into LanguageTMP(lang_id,idcv,language_name,[level],content,container,name_title) values(@lang_id,@idcv,@language_name,@level,@content,@container,@name_title);";
            await connection.ExecuteAsync(query, lg);
        }
        public async Task AddGOTMP_Async(GoalsTMP go)
        {
            using var connection = GetNguoiDungConnection();
            var query = "Insert into GoalsTMP(goal_id,idcv,term,content,container,name_title) values(@goal_id,@idcv,@term,@content,@container,@name_title);";
            await connection.ExecuteAsync(query, go);
        }
        public async Task AddCERTMP_Async(CertificateTMP cer)
        {
            using var connection = GetNguoiDungConnection();
            var query = "Insert into CertificateTMP(cer_id,idcv,[time],content,container,name_title) values(@cer_id,@idcv,@time,@content,@container,@name_title);";
            await connection.ExecuteAsync(query, cer);
        }
        public async Task AddAPTMP_Async(AnotherPartTMP ap)
        {
            using var connection = GetNguoiDungConnection();
            var query = "Insert into AnotherPartTMP(anotherpart_id,idcv,name_part,title,content,container,name_title) values(@anotherpart_id,@idcv,@name_part,@title,@content,@container,@name_title);";
            await connection.ExecuteAsync(query, ap);
        }

        // Phần Mail và thư xin việc 
        public async Task<IEnumerable<Industry>> GetIndustries()
        {
            using var connection = GetLetterCVConnection();
            var query = "SELECT idind, nameind FROM industry";
            return await connection.QueryAsync<Industry>(query);
        }

        public async Task<IEnumerable<TemplateLetter>> GetTemplateLetters()
        {
            using var connection = GetLetterCVConnection();
            var query = "SELECT idtemp, idind, nametemp, heading, content, initial FROM templateLT";
            return await connection.QueryAsync<TemplateLetter>(query);
        }
        // Thêm Thư 
        public async Task<int> ADD_LetterCv(LetterCVofUser mail)
        {
            using var connection = GetNguoiDungConnection();
            var query = "insert into Mailletter(userid,head,content,signatureLetter,font_size,font_family) values(@userid,@head,@content,@signatureLetter,@font_size,@font_family); Select cast(Scope_identity() as int)";
            var newLetterid = await connection.QuerySingleAsync<int>(query, mail);
            mail.mail_id = newLetterid;
            return newLetterid;
        }
        // Xóa Thư
        public async Task<bool> DeleteLetterUserAsync(int mailid)
        {
            using var connection = GetNguoiDungConnection();
            var rowsAffected = await connection.ExecuteAsync("DELETE FROM Mailletter WHERE mail_id = @Mailid", new { Mailid = mailid });
            return rowsAffected > 0;
        }
        // Sửa Thư
        public async Task UpdateLetterUserAsync(LetterCVofUser mail)
        {
            using var connection = GetNguoiDungConnection();
            await connection.ExecuteAsync("Update Mailletter Set head = @head , content = @content,signatureLetter = @signatureLetter,font_size = @font_size,font_family = @font_family where mail_id = @Mail_id", mail);
        }

        public async Task UpdateNameUserAsync(int userId, string nameUser)
        {
            using var connection = GetNguoiDungConnection();
            await connection.ExecuteAsync(
                "UPDATE Users SET [name] = @NameUser WHERE userid = @UserId",
                new { UserId = userId, NameUser = nameUser });
        }

        public async Task UpdatePasswordUserAsync(int userId, string password)
        {
            using var connection = GetNguoiDungConnection();
            await connection.ExecuteAsync(
                "UPDATE Users SET [password] = @Password WHERE userid = @UserId",
                new { UserId = userId, Password = password });
        }

        public async Task<List<LetterCVofUser>> GetLetterofUsers(int userId)
        {
            using var connection = GetNguoiDungConnection();
            var mail = await connection.QueryAsync<LetterCVofUser>("select u.userid,m.* from Users as u join Mailletter as m on u.userid = m.userid where u.userid = @UserId", new { UserId = userId });
            return mail.ToList();
        }
        public async Task<LetterCVofUser?> GetFullLetterDetailsByUserAsync(int userid, int mail_id)
        {
            using var connection = GetNguoiDungConnection();
            connection.Open();
            var letter = await connection.QueryFirstOrDefaultAsync<LetterCVofUser>("Select * from Mailletter where mail_id = @Mail and userid = @Userid", new { Mail = mail_id,Userid = userid });
            return letter;
        }
    }
}
