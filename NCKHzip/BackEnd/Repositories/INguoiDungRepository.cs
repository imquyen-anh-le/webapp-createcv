using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using TestAPI0501.Models;

namespace TestAPI0501.Repository
{
    public interface INguoiDungRepository
    {
        Task<List<NguoiDung>> GetAllAsync();
        Task<List<CV>> GetAllCVAsync();
        Task<NguoiDung> GetByIdAsync(int userId);
        Task AddAsync (NguoiDung user);
        Task UpdateAsync(NguoiDung user);
        Task DeleteAsync (int userId);
        Task<NguoiDung> GetByEmailAsync(string email);
        Task<List<CVrepresent>> GetCVofUsers(int userId);

        // Thêm Thông Tin Các Phần Trong CV
        Task<int> AddCV_Async(CV cv);
        Task AddPU_Async(ProfileUser pu);
        Task AddOV_Async(OverView ov);
        Task AddED_Async(Education ed);
        Task AddWE_Async(Workexperience we);
        Task AddSK_Async(Skill sk);
        Task AddPR_Async(Projects pr);
        Task AddAW_Async(Awards Awards);
        Task AddLG_Async(Language lg);
        Task AddGO_Async(Goals go);
        Task AddCER_Async(Certificate cer);
        Task AddAP_Async(AnotherPart ap);
        Task ADDI4_Async(Information i4);
        // get in4 in CV
        Task<FullDetailCV> GetFullCVDetailsByUserAsync(int userid, int idcv);

        // lấy ra tất cả các mẫu CV của user đã tạo 
        //Task<List<CV>> 
        Task AddImageAsync(UploadIMG image);
        Task<UploadIMG> GetImgByIdin4Async(int in4id);
        // 
        Task<bool> UpdateFullDetailCVAsync(int userid, int idcv, FullDetailCV fullDetailCV);
        Task<bool> UpdateUpimg(int in4id, UploadIMG upimg);
        // ------------------------ Xóa CV 
        Task<bool> DeleteFullDetailCVAsync(int idcv, int in4id);
        Task<UploadIMG> GetIn4idByIdCVAsync(int idcv);
        Task<bool> DeleteCVAsync(int idcv);
        Task<bool> DeleteInformationAsync(int idcv);
        Task<bool> DeleteUserProfileAsync(int idcv);
        Task<bool> DeleteUploadimgAsync(int in4id);
        Task<bool> DeleteOverViewAsync(int idcv);
        Task<bool> DeleteWorkExperienceAsync(int idcv);
        Task<bool> DeleteEducationAsync(int idcv);
        Task<bool> DeleteSkillAsync(int idcv);
        Task<bool> DeleteProjectsAsync(int idcv);
        Task<bool> DeleteAwardsAsync(int idcv);
        Task<bool> DeleteGoalsAsync(int idcv);
        Task<bool> DeleteCertificateAsync(int idcv);
        Task<bool> DeleteLanguageAsync(int idcv);
        Task<bool> DeleteAnotherPartAsync(int idcv);

        // ------------- Phần bảng tmp để xử lý update 
        Task AddOVTMP_Async(OverviewTMP ov);
        Task AddEDTMP_Async(EducationTMP ed);
        Task AddWETMP_Async(WorkExperienceTMP we);
        Task AddSKTMP_Async(SkillTMP sk);
        Task AddPRTMP_Async(ProjectsTMP pr);
        Task AddAWTMP_Async(AwardsTMP Awards);
        Task AddLGTMP_Async(LanguageTMP lg);
        Task AddGOTMP_Async(GoalsTMP go);
        Task AddCERTMP_Async(CertificateTMP cer);
        Task AddAPTMP_Async(AnotherPartTMP ap);
        // ------------ Phần Letter / Mail Xin Việc 
        Task<IEnumerable<Industry>> GetIndustries();
        Task<IEnumerable<TemplateLetter>> GetTemplateLetters();
        Task<int> ADD_LetterCv(LetterCVofUser mail);
        Task<bool> DeleteLetterUserAsync(int mail_id);
        Task UpdateLetterUserAsync(LetterCVofUser mail);
        Task<List<LetterCVofUser>> GetLetterofUsers(int userId);

        Task<LetterCVofUser> GetFullLetterDetailsByUserAsync(int userid, int mail_id);
        // ---- Update mk và tên người dùng 
        Task UpdatePasswordUserAsync(int userId, string password);
        Task UpdateNameUserAsync(int userId, string nameUser);

    }
}
