using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using TestAPI0501.Models;
using TestAPI0501.Repository;

namespace TestAPI0501.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NguoiDungController : ControllerBase
    {
        private readonly INguoiDungRepository _userrepository;

        public NguoiDungController(INguoiDungRepository userrepository)
        {
            _userrepository = userrepository;
        }

        [HttpGet("AllUsers")]
        public async Task<ActionResult<List<NguoiDung>>> GetAllAsync()
        {
            var user = await _userrepository.GetAllAsync();
            return Ok(user);
        }

        [HttpGet("AllCV")]
        public async Task<ActionResult<List<CV>>> GetAllCVAsync()
        {
            var cv = await _userrepository.GetAllCVAsync();
            return Ok(cv);
        }
        [HttpGet("AllCV_by_ID_user")]
        public async Task<ActionResult<List<CVrepresent>>> GetCVofUsers(int userid)
        {
            var cv = await _userrepository.GetCVofUsers(userid);
            if (cv != null)
            {
                return Ok(cv);
            }
            return NotFound("Người Dùng Này Chưa có Cv nào");
        } 


        [HttpGet("{userid}",Name = "GetById")]
        public async Task<ActionResult<NguoiDung>> GetByIdAsync(int userid)
        {
            var user = await _userrepository.GetByIdAsync(userid);
            if(user != null)
            {
                return Ok(user);
            }
            return NotFound("Khong tìm thấy Người Dùng");
        }

        [HttpPost("Login")]
        public async Task<ActionResult<NguoiDung>> LoginAsync([FromBody] LoginRequest loginRequest)
        {
            if (string.IsNullOrEmpty(loginRequest.Email) || string.IsNullOrEmpty(loginRequest.Password))
            {
                return BadRequest("Email và Mật khẩu không được để trống.");
            }

            var user = await _userrepository.GetByEmailAsync(loginRequest.Email);
            if (user == null || user.Password != loginRequest.Password)
            {
                return Unauthorized("Email hoặc mật khẩu không đúng.");
            }

            return Ok(user);
        }
        // --------------
        [HttpPost("AddNewUser")]
        public async Task<ActionResult> AddAsync([FromBody] NguoiDung user)
        {
            await _userrepository.AddAsync(user);
            return CreatedAtAction("GetById",new { userid = user.UserId }, user);
        }
        // --------------------
        [HttpPut("{userid}",Name = "GetById")]
        public async Task<ActionResult> UpdateAsync(int userid, NguoiDung user)
        {
            var existingUS = await _userrepository.GetByIdAsync(userid);
            if(existingUS != null)
            {
                user.UserId = existingUS.UserId;
                await _userrepository.UpdateAsync(user);
                return NoContent();
            }
            return NotFound("Trong Danh Sách Chưa có User này");
        }
        [HttpDelete("{userid}")]
        public async Task<ActionResult> DeleteAsync(int userid)
        {
            var existingUS = await _userrepository.GetByIdAsync(userid);
            if (existingUS != null)
            {
                await _userrepository.DeleteAsync(userid);
                return NoContent();
            }
            return NotFound("Trong Danh Sách Chưa có User này");
        }
        // -----------------------------------------------------------------------------------------
        [HttpPost("in4CV_myCV")] // Phần in4 CV 
        public async Task<ActionResult> AddCV_Async(CV cv)
        {
            await _userrepository.AddCV_Async(cv);
            return CreatedAtAction("GetById", new { userid = cv.idcv }, cv);
        }
        [HttpPost("profile_myCV")] // Phần Profile
        public async Task<ActionResult> AddPU_Async(ProfileUser pu)
        {
            await _userrepository.AddPU_Async(pu);
            return CreatedAtAction("GetById", new { userid = pu.profileid }, pu);
        }
        [HttpPost("information")] // Phần Information
        public async Task<ActionResult> ADDI4_Async(Information i4)
        {
            await _userrepository.ADDI4_Async(i4);
            return CreatedAtAction("GetById", new { userid = i4.in4id }, i4);
        }
        [HttpPost("overview")] // Phần Overview
        public async Task<ActionResult> AddOV_Async(OverView ov)
        {
            await _userrepository.AddOV_Async(ov);
            return CreatedAtAction("GetById", new { userid = ov.overview_id }, ov);
        }
        [HttpPost("experience")] // Phần Work experience
        public async Task<ActionResult> AddWE_Async(Workexperience we)
        {
            await _userrepository.AddWE_Async(we);
            return CreatedAtAction("GetById", new { userid = we.experience_id }, we);
        }
        [HttpPost("Education")] // phần Education 
        public async Task<ActionResult> AddED_Async(Education ed)
        {
            await _userrepository.AddED_Async(ed);
            return CreatedAtAction("GetById", new { userid = ed.education_id }, ed);
        }
        [HttpPost("Projects")] // Phần Project 
        public async Task<ActionResult> AddPR_Async(Projects pr)
        {
            await _userrepository.AddPR_Async(pr);
            return CreatedAtAction("GetById", new { userid = pr.project_id }, pr);
        }
        [HttpPost("Skill")] // Phần Skill
        public async Task<ActionResult> AddSK_Async(Skill sk)
        {
            await _userrepository.AddSK_Async(sk);
            return CreatedAtAction("GetById", new { userid = sk.skill_id }, sk);
        }
        [HttpPost("Awards")] // Phần Awards 
        public async Task<ActionResult> AddAW_Async(Awards aw)
        {
            await _userrepository.AddAW_Async(aw);
            return CreatedAtAction("GetById", new { userid = aw.award_id }, aw);
        }
        [HttpPost("Goals")] // Phần GOALS 
        public async Task<ActionResult> AddGO_Async(Goals go)
        {
            await _userrepository.AddGO_Async(go);
            return CreatedAtAction("GetById", new { userid = go.goal_id }, go);
        }
        [HttpPost("Certificate")] // Phần Certificate 
        public async Task<ActionResult> AddCER_Async(Certificate cer)
        {
            await _userrepository.AddCER_Async(cer);
            return CreatedAtAction("GetById", new { userid = cer.cer_id }, cer);
        }
        [HttpPost("Language")] // Phần Language 
        public async Task<ActionResult> AddLG_Async(Language lg)
        {
            await _userrepository.AddLG_Async(lg);
            return CreatedAtAction("GetById", new { userid = lg.lang_id }, lg);
        }
        [HttpPost("AnotherPart")] // Phần AnotherPart 
        public async Task<ActionResult> AddAP_Async(AnotherPart ap)
        {
            await _userrepository.AddAP_Async(ap);
            return CreatedAtAction("GetById", new { userid = ap.anotherpart_id }, ap);
        }
        // -------------------------------------------------------------------------------------------

        [HttpGet("user/getDetailsCVbyID")]
        public async Task<ActionResult<FullDetailCV>> GetFullCVDetailsByUserAsync(int userid,int idcv)
        {
            // Gọi phương thức từ Repository
            var cv = await _userrepository.GetFullCVDetailsByUserAsync(userid, idcv);
            if (cv == null)
            {
                return NotFound($"Không tìm thấy CV với UserId: {userid} và IdCV: {idcv}.");
            }
            return Ok(cv);
        }

        // ------------------------------------------------------------------
        [HttpPost("UploadImage")]
        public async Task<ActionResult> UploadImageAsync([FromForm] int in4id,[FromForm] IFormFile file)
        {
            Console.WriteLine($"Received in4id: {in4id}, File Name: {file?.FileName}");
            if (file == null || file.Length == 0)
            {
                return BadRequest("File không hợp lệ.");
            }

            // Tạo đường dẫn lưu trữ file
            var folderPath = Path.Combine(Directory.GetCurrentDirectory(), "UploadedImages");
            if (!Directory.Exists(folderPath))
            {
                Directory.CreateDirectory(folderPath);
            }

            var fileName = $"{Guid.NewGuid()}_{file.FileName}";
            var filePath = Path.Combine(folderPath, fileName);

            // Lưu file lên server
            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            // Lưu thông tin file vào cơ sở dữ liệu
            var image = new UploadIMG
            {
                in4id = in4id,
                img = fileName
            };
            await _userrepository.AddImageAsync(image);

            return Ok(new { in4id, filePath });
        }

        [HttpGet("GetIMGbyin4ID")]
        public async Task<ActionResult<UploadIMG>> GetImgByIdin4Async(int in4id)
        {
            // Gọi phương thức từ Repository
            var imgData = await _userrepository.GetImgByIdin4Async(in4id);
            if (imgData != null)
            {
                return Ok(imgData);
            }
            return NotFound("Khong tìm thấy ẢNh của CV");
        }
        [HttpGet("GetIn4idbyIDCV")]
        public async Task<ActionResult<UploadIMG>> GetIn4idByIdCVAsync(int idcv)
        {
            // Gọi phương thức từ Repository
            var imgData = await _userrepository.GetIn4idByIdCVAsync(idcv);
            if (imgData != null)
            {
                return Ok(imgData);
            }
            return NotFound("Khong tìm thấy");
        }
        [HttpPut("Update_DetailsCVbyID")]
        public async Task<IActionResult> UpdateFullDetailCV(int userid, int idcv, [FromBody] FullDetailCV fullDetailCV)
        {
            if (fullDetailCV == null ||
                fullDetailCV.CV == null ||
                fullDetailCV.Profile == null ||
                fullDetailCV.Information == null)
            {
                return BadRequest("Dữ liệu CV, Profile hoặc Information không hợp lệ.");
            }

            try
            {
                var result = await _userrepository.UpdateFullDetailCVAsync(userid, idcv, fullDetailCV);

                if (!result)
                {
                    return NotFound($"Không tìm thấy CV với UserId: {userid} và IdCV: {idcv}.");
                }

                return Ok("Cập nhật CV thành công.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Đã xảy ra lỗi trong quá trình cập nhật: {ex.Message}");
            }
        }

        [HttpDelete("Delete_DetailsCVbyID")]
        public async Task<IActionResult> DeleteFullDetailCVAsync(int idcv, int in4id)
        {
            var result = await _userrepository.DeleteFullDetailCVAsync(idcv, in4id);
            if (!result)
            {
                return NotFound("Không tìm thấy");
            }
            return Ok("Xóa CV thành công.");

        }

        [HttpPut]
        [Route("UpdateUpimg")]
        public async Task<ActionResult> UpdateUpimg([FromForm] int in4id, [FromForm] IFormFile imgFile)
        {
            Console.WriteLine($"Received in4id: {in4id}, File Name: {imgFile?.FileName}");

            // Kiểm tra xem file có hợp lệ không
            if (imgFile == null || imgFile.Length == 0)
            {
                return BadRequest("File không hợp lệ.");
            }

            // Tạo đường dẫn lưu trữ file
            var folderPath = Path.Combine(Directory.GetCurrentDirectory(), "UploadedImages");
            if (!Directory.Exists(folderPath))
            {
                Directory.CreateDirectory(folderPath);
            }

            // Tạo tên file mới với GUID để tránh trùng
            var fileName = $"{Guid.NewGuid()}_{imgFile.FileName}";
            var filePath = Path.Combine(folderPath, fileName);

            // Lưu ảnh lên server
            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await imgFile.CopyToAsync(stream);
            }

            // Cập nhật tên file mới vào CSDL
            var result = await _userrepository.UpdateUpimg(in4id, new UploadIMG
            {
                in4id = in4id,
                img = fileName // Lưu tên file vào cơ sở dữ liệu
            });

            if (result)
            {
                return Ok(new { Message = "Cập nhật ảnh thành công", FilePath = filePath });
            }

            return NotFound("Không tìm thấy thông tin cần cập nhật.");
        }
        [HttpDelete("Delete_CV")]
        public async Task<ActionResult> DeleteCVAsync(int idcv)
        {
            var res = await _userrepository.DeleteCVAsync(idcv);
            if (res)
            {
                return NoContent();
            }
            return NotFound("Không tìm thấy");
        }
        [HttpDelete("Delete_in4")]
        public async Task<ActionResult> DeleteInformationAsync(int idcv)
        {
            var res = await _userrepository.DeleteInformationAsync(idcv);
            if (res)
            {
                return NoContent();
            }
            return NotFound("Không tìm thấy");
        }
        [HttpDelete("Delete_Profile")]
        public async Task<ActionResult> DeleteUserProfileAsync(int idcv)
        {
            var res = await _userrepository.DeleteUserProfileAsync(idcv);
            if (res)
            {
                return NoContent();
            }
            return NotFound("Không tìm thấy");
        }
        [HttpDelete("Delete_UpIMG")]
        public async Task<ActionResult> DeleteUploadimgAsync(int in4id)
        {
            var isUpdated = await _userrepository.DeleteUploadimgAsync(in4id);
            if (!isUpdated)
            {
                return NotFound("Trong danh sách chưa có User này");
            }

            return Ok("Cập nhật CV thành công.");
        }
        [HttpDelete("Delete_Overview")]
        public async Task<ActionResult> DeleteOverViewAsync(int idcv)
        {
            var res = await _userrepository.DeleteOverViewAsync(idcv);
            if (res)
            {
                return NoContent();
            }
            return NotFound("Không tìm thấy");
        }
        [HttpDelete("Delete_WorkExperience")]
        public async Task<ActionResult> DeleteWorkExperienceAsync(int idcv)
        {
            var res = await _userrepository.DeleteWorkExperienceAsync(idcv);
            if (res)
            {
                return NoContent();
            }
            return NotFound("Không tìm thấy");
        }
        [HttpDelete("Delete_Education")]
        public async Task<ActionResult> DeleteEducationAsync(int idcv)
        {
            var res = await _userrepository.DeleteEducationAsync(idcv);
            if (res)
            {
                return NoContent();
            }
            return NotFound("Không tìm thấy");
        }
        [HttpDelete("Delete_Skill")]
        public async Task<ActionResult> DeleteSkillAsync(int idcv)
        {
            var res = await _userrepository.DeleteSkillAsync(idcv);
            if (res)
            {
                return NoContent();
            }
            return NotFound("Không tìm thấy");
        }
        [HttpDelete("Delete_Project")]
        public async Task<ActionResult> DeleteProjectsAsync(int idcv)
        {
            var res = await _userrepository.DeleteProjectsAsync(idcv);
            if (res)
            {
                return NoContent();
            }
            return NotFound("Không tìm thấy");
        }
        [HttpDelete("Delete_Awards")]
        public async Task<ActionResult> DeleteAwardsAsync(int idcv)
        {
            var res = await _userrepository.DeleteAwardsAsync(idcv);
            if (res)
            {
                return NoContent();
            }
            return NotFound("Không tìm thấy");
        }
        [HttpDelete("Delete_Goals")]
        public async Task<ActionResult> DeleteGoalsAsync(int idcv)
        {
            var res = await _userrepository.DeleteGoalsAsync(idcv);
            if (res)
            {
                return NoContent();
            }
            return NotFound("Không tìm thấy");
        }
        [HttpDelete("Delete_Cer")]
        public async Task<ActionResult> DeleteCertificateAsync(int idcv)
        {
            var res = await _userrepository.DeleteCertificateAsync(idcv);
            if (res)
            {
                return NoContent();
            }
            return NotFound("Không tìm thấy");
        }
        [HttpDelete("Delete_Language")]
        public async Task<ActionResult> DeleteLanguageAsync(int idcv)
        {
            var res = await _userrepository.DeleteLanguageAsync(idcv);
            if (res)
            {
                return NoContent();
            }
            return NotFound("Không tìm thấy");
        }
        [HttpDelete("Delete_Another")]
        public async Task<ActionResult> DeleteAnotherPartAsync(int idcv)
        {
            var res = await _userrepository.DeleteAnotherPartAsync(idcv);
            if (res)
            {
                return NoContent();
            }
            return NotFound("Không tìm thấy");
        }
        // -------------------------------------------- 
        [HttpPost("overviewTMP")] // Phần Overview
        public async Task<ActionResult> AddOVTMP_Async(OverviewTMP ov)
        {
            await _userrepository.AddOVTMP_Async(ov);
            return CreatedAtAction("GetById", new { userid = ov.overview_id }, ov);
        }
        [HttpPost("experienceTMP")] // Phần Work experience
        public async Task<ActionResult> AddWETMP_Async(WorkExperienceTMP we)
        {
            await _userrepository.AddWETMP_Async(we);
            return CreatedAtAction("GetById", new { userid = we.experience_id }, we);
        }
        [HttpPost("EducationTMP")] // phần Education 
        public async Task<ActionResult> AddEDTMP_Async(EducationTMP ed)
        {
            await _userrepository.AddEDTMP_Async(ed);
            return CreatedAtAction("GetById", new { userid = ed.education_id }, ed);
        }
        [HttpPost("ProjectsTMP")] // Phần Project 
        public async Task<ActionResult> AddPRTMP_Async(ProjectsTMP pr)
        {
            await _userrepository.AddPRTMP_Async(pr);
            return CreatedAtAction("GetById", new { userid = pr.project_id }, pr);
        }
        [HttpPost("SkillTMP")] // Phần Skill
        public async Task<ActionResult> AddSKTMP_Async(SkillTMP sk)
        {
            await _userrepository.AddSKTMP_Async(sk);
            return CreatedAtAction("GetById", new { userid = sk.skill_id }, sk);
        }
        [HttpPost("AwardsTMP")] // Phần Awards 
        public async Task<ActionResult> AddAWTMP_Async(AwardsTMP Awards)
        {
            await _userrepository.AddAWTMP_Async(Awards);
            return CreatedAtAction("GetById", new { userid = Awards.award_id }, Awards);
        }
        [HttpPost("GoalsTMP")] // Phần GOALS 
        public async Task<ActionResult> AddGOTMP_Async(GoalsTMP go)
        {
            await _userrepository.AddGOTMP_Async(go);
            return CreatedAtAction("GetById", new { userid = go.goal_id }, go);
        }
        [HttpPost("CertificateTMP")] // Phần Certificate 
        public async Task<ActionResult> AddCERTMP_Async(CertificateTMP cer)
        {
            await _userrepository.AddCERTMP_Async(cer);
            return CreatedAtAction("GetById", new { userid = cer.cer_id }, cer);
        }
        [HttpPost("LanguageTMP")] // Phần Language 
        public async Task<ActionResult> AddLGTMP_Async(LanguageTMP lg)
        {
            await _userrepository.AddLGTMP_Async(lg);
            return CreatedAtAction("GetById", new { userid = lg.lang_id }, lg);
        }
        [HttpPost("AnotherPartTMP")] // Phần AnotherPart 
        public async Task<ActionResult> AddAPTMP_Async(AnotherPartTMP ap)
        {
            await _userrepository.AddAPTMP_Async(ap);
            return CreatedAtAction("GetById", new { userid = ap.anotherpart_id }, ap);
        }
        // Mail / Thư Xin Việc 
        [HttpGet("Industries")]
        public async Task<ActionResult<IEnumerable<Industry>>> GetIndustries()
        {
            var industries = await _userrepository.GetIndustries();
            return Ok(industries);
        }

        [HttpGet("TemplateLetters")]
        public async Task<ActionResult<IEnumerable<TemplateLetter>>> GetTemplateLetters()
        {
            var templates = await _userrepository.GetTemplateLetters();
            return Ok(templates);
        }
        // Phần thư Xin Việc 
        [HttpPost("LetterCV")] 
        public async Task<ActionResult> ADD_LetterCv(LetterCVofUser mail)
        {
            await _userrepository.ADD_LetterCv(mail);
            return CreatedAtAction("GetById", new { userid = mail.mail_id }, mail);
        }

        [HttpDelete("Delete_LetterUser")]
        public async Task<ActionResult> DeleteLetterUserAsync(int mail_id)
        {
            var res = await _userrepository.DeleteLetterUserAsync(mail_id);
            if (res)
            {
                return NoContent();
            }
            return NotFound("Không tìm thấy");
        }

        [HttpPut("Update_LetterUser")]
        public async Task<ActionResult> UpdateLetterUserAsync(LetterCVofUser mail)
        {
            if (mail == null || mail.mail_id <= 0)
            {
                return BadRequest("Thư hiện không tồn tại");
            }
            await _userrepository.UpdateLetterUserAsync(mail);
            return Ok(new { message = "Sửa Thành Công" });
        }
        // Update User 
        [HttpPut("Update_NameUser")]
        public async Task<ActionResult> UpdateNameUserAsync([FromBody] NguoiDung request)
        {
            if (request == null || request.UserId <= 0 || string.IsNullOrWhiteSpace(request.Name))
            {
                return BadRequest("Dữ liệu không hợp lệ.");
            }

            await _userrepository.UpdateNameUserAsync(request.UserId, request.Name);
            return Ok(new { message = "Sửa tên thành công" });
        }

        [HttpPut("Update_PasswordUser")]
        public async Task<ActionResult> UpdatePasswordUserAsync([FromBody] NguoiDung request)
        {
            if (request == null || request.UserId <= 0 || string.IsNullOrWhiteSpace(request.Password))
            {
                return BadRequest("Dữ liệu không hợp lệ.");
            }

            await _userrepository.UpdatePasswordUserAsync(request.UserId, request.Password);
            return Ok(new { message = "Sửa mật khẩu thành công" });
        }

        [HttpGet("AllLetter_by_ID_user")]
        public async Task<ActionResult<List<LetterCVofUser>>> GetLetterofUsers(int userId)
        {
            var mail = await _userrepository.GetLetterofUsers(userId);
            if (mail == null || mail.Count == 0)
            {
                return NotFound("Người dùng này chưa có thư nào.");
            }
            return Ok(mail);
        }
        [HttpGet("GetDetailLetter_byUser_n_Mailid")]
        public async Task<ActionResult<LetterCVofUser>> GetFullLetterDetailsByUserAsync(int userid, int idcv)
        {
            // Gọi phương thức từ Repository
            var cv = await _userrepository.GetFullLetterDetailsByUserAsync(userid, idcv);
            if (cv == null)
            {
                return NotFound($"Không tìm thấy Mẫu Mail với UserId: {userid} và IdCV: {idcv}.");
            }
            return Ok(cv);
        }
    }
}
