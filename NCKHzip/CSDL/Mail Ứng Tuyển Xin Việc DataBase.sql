create database letterCV
use letterCV 

create table industry (
	idind int,
	nameind nvarchar(100)
)
select * from industry
create table templateLT (
	idtemp int,
	idind int,
	nametemp nvarchar(100),
	heading nvarchar(100),
	content text,
	initial nvarchar(40)
)

alter table templateLT
alter column heading nvarchar(250)
update templateLT
set content = N'Kính gửi Phòng nhân sự Công ty [Tên Công Ty],<br><br>
Em là Minh Hiếu, tốt nghiệp Kinh tế Đối ngoại của trường Đại học Ngoại thương. Em viết thư này để ứng tuyển vị trí [Tên Vị Trí] của Công ty [Tên Công Ty].<br><br>
Em có X năm kinh nghiệm với vị trí [Tên Vị Trí], trong đó X năm tại tập đoàn XYZ và làm remote cho một tập đoàn nước ngoài. Em nghĩ rằng đây sẽ là cơ hội trao đổi kỹ năng và nghiệp vụ sâu thiết, cũng như cơ hội mở rộng hướng ngành. Anh/Chị có thể xem thông tin chi tiết trong CV đính kèm.<br><br>
Em đã biết tới tin tuyển dụng vị trí [Tên Vị Trí] của Công ty qua MXH LinkedIn. Em rất hứng thú và tin rằng mình có thể đáp ứng tốt yêu cầu công việc.<br><br>
Em xin gửi Anh/Chị CV và portfolio ở phần đính kèm. Nếu Anh/Chị có bất kỳ thông tin hoặc câu hỏi nào, xin vui lòng liên hệ với em qua SĐT: [Số điện thoại].<br><br>
Em xin chân thành cảm ơn và mong sớm nhận được phản hồi từ Công ty.<br><br>
Trân Trọng,<br>'
where idtemp = 1
select * from templateLT

insert into templateLT values(
	3,N'Mẫu 1',N'[Họ tên]_[Vị trí ứng tuyển]_[Tên công ty ứng tuyển]',N'Kính gửi Phòng nhân sự Công ty [Tên công ty ứng tuyển],<br><br>

Em là [Họ tên], hiện là sinh viên năm [...] khoa [Tên chuyên ngành] của [Trường theo học]. Thông qua [mạng xã hội/Tiktok], em được biết Quý công ty đang có nhu cầu tuyển dụng vị trí [Vị trí ứng tuyển]. Vì vậy, em viết thư này để bày tỏ sự quan tâm của mình đối với vị trí này. Qua thời gian tìm hiểu, em nhận thấy Quý công ty là nơi phù hợp nhất với [Mục tiêu nghề nghiệp] của em, để em có thể học hỏi được từ những nhân sự giỏi nhất trong lĩnh vực.<br><br>

Email em có đính kèm theo CV ứng tuyển. Hy vọng rằng Quý công ty sẽ xem xét và phản hồi lại email này.<br><br>

Em xin chân thành cảm ơn.<br><br>

Trân trọng,<br><br>',N'[Kí Tên]'
),
(
	3,N'Mẫu 2',N'Họ tên - Vị trí ứng tuyển - Tên công ty/doanh nghiệp',N'Kính gửi : Phòng nhân sự công ty...<br><br>

Tôi muốn ứng tuyển vào vị trí [Tên vị trí] tại Quý công ty. Với những kỹ năng và kinh nghiệm đã tích lũy trong [số năm] năm làm việc được, tôi tin rằng tôi có thể đóng góp vào công ty.<br><br>

Trong suốt [số năm] năm làm việc trong ngành này, tôi đã có các kỹ năng làm việc bao gồm: [liệt kê kỹ năng]. Tôi cũng đã đạt được những thành tựu đáng kể trong công việc của mình, bao gồm: [liệt kê một số thành tựu]. Những kinh nghiệm và kỹ năng này đã giúp tôi hiểu rõ hơn về ngành nghề này và phát triển khả năng bản thân.<br><br>

Tôi muốn gia nhập công ty để cống hiến và phát triển kinh nghiệm của mình trong một môi trường công ty. Tôi cam kết làm việc chăm chỉ và đóng góp vào sự phát triển của công ty.<br><br>

Tôi rất mong muốn có cơ hội được phỏng vấn để chia sẻ thêm các câu chuyện bản thân. Nếu có thắc mắc hoặc thông tin nào cần bổ sung, Quý công ty có thể phản hồi qua email hoặc qua các phương tiện liên lạc mà tôi đã cung cấp trong CV.<br><br>

Cảm ơn Quý công ty đã dành thời gian đọc email và CV của tôi.<br><br>

Trân trọng,<br><br>',N'[Người Gửi]'
),
(
	3,N'Mẫu Cho SV còn đi học',N'[Tên Công Ty - Vị Trí Ứng Tuyển] - Tên Ứng Viên',N'Kính gửi Phòng Tuyển dụng nhân sự – [Tên công ty],<br><br>

Tôi là [tên của bạn], tôi xin nộp hồ sơ ứng tuyển vào vị trí [chức danh công việc] theo như thông tin tuyển dụng của Quý công ty tại [website đăng tuyển].<br><br>

Tôi tự tin rằng mình có thể đáp ứng được yêu cầu công việc cũng như có đầy đủ tiềm năng để trở thành một nhân viên giỏi mà Quý công ty đang tìm kiếm. Tôi có [số năm] kinh nghiệm trong [lĩnh vực 1], [lĩnh vực 2], [lĩnh vực 3] và có khả năng [kỹ năng mềm] cùng [kỹ năng chuyên môn] tốt.<br><br>

Gửi kèm theo email này là hồ sơ xin việc của tôi gồm có [liệt kê các tài liệu bạn gửi].<br><br>

Tôi xin chân thành cảm ơn và mong sớm nhận được hồi âm của Quý công ty cho vị trí tuyển dụng này.<br><br>

Trân trọng,<br><br>',N'[Người Gửi]'
),
(
	3,N'Mẫu 3',N'Nguyễn Văn A - Content Marketing - TopCV Việt Nam',N'Kính gửi bộ phận nhân sự Công ty Cổ phần TOPCV Việt Nam,<br><br>

Tôi là [Tên của bạn], đã có hơn x năm kinh nghiệm làm việc trong lĩnh vực [Tên ngành]. Tôi gửi email này với mục đích ứng tuyển cho vị trí [Tên vị trí] mà công ty [Tên công ty] đã đăng tuyển trên [Tên website nơi đăng thông tin].<br><br>

Trong quá trình làm việc tại [Tên công ty cũ], tôi đã đảm nhận nhiều vai trò và chịu trách nhiệm cho các dự án quan trọng, giúp tôi phát triển nhiều kỹ năng, bao gồm [Mô tả kỹ năng]. Tôi đã đạt được nhiều thành tựu, trong đó có [Mô tả thành tựu], và tôi mong muốn mang kinh nghiệm và kiến thức này đến công ty [Tên công ty] để góp phần đẩy mạnh mục tiêu và sứ mệnh của công ty.<br><br>

Công ty [Tên công ty] với giá trị cốt lõi và lịch sử phát triển đầy ấn tượng đã thu hút tôi. Tôi tin rằng, với kinh nghiệm và kỹ năng chuyên môn của mình, tôi có thể mang lại nhiều đóng góp trong hành trình phát triển tiếp theo của công ty.<br><br>

Tôi đã gửi kèm theo email này CV của mình để cung cấp một cái nhìn toàn diện hơn về quá trình làm việc và những thành tựu của tôi. Tôi rất mong được có một cuộc trao đổi trực tiếp với quý công ty, nhằm chia sẻ rõ hơn về cách tôi có thể góp phần vào sự thành công của công ty [Tên công ty].<br><br>

Cảm ơn quý vị đã xem xét ứng tuyển của tôi. Tôi mong sớm nhận được phản hồi từ quý công ty.<br><br>

Trân trọng,<br><br>',N'[Tên của bạn]'
),
(
	2,N'Mẫu Cho Sinh Viên Mới Ra Trường',N'Ứng tuyển vị trí [Tên công việc] – [Tên của bạn]',N'Kính gửi Phòng Tuyển dụng – [Tên công ty],<br><br>

Tôi là [Tên của bạn], sinh viên mới tốt nghiệp chuyên ngành [Công nghệ thông tin/Khoa học máy tính…] tại [Tên trường]. Tôi rất quan tâm đến vị trí [Tên công việc] tại Quý công ty và mong muốn có cơ hội ứng tuyển.<br><br>

Trong quá trình học tập, tôi đã tích lũy kiến thức về [các ngôn ngữ lập trình: Java, Python, C++,...] và tham gia các dự án như [tên dự án], giúp tôi phát triển kỹ năng lập trình, teamwork và giải quyết vấn đề. Tôi cũng đã hoàn thành các khóa học/chứng chỉ như [Google IT Support, AWS Cloud Practitioner,...], chứng minh sự chủ động học hỏi của mình.<br><br>
Dù chưa có nhiều kinh nghiệm thực tế, nhưng với tinh thần ham học hỏi và khả năng thích nghi nhanh, tôi tin rằng mình có thể đóng góp vào sự phát triển của Quý công ty. Tôi xin gửi kèm CV và rất mong có cơ hội trao đổi thêm trong buổi phỏng vấn.<br><br>

Xin chân thành cảm ơn.<br><br>
Trân trọng,<br><br>',N'[Ký Tên]'
),
(
	2,N'Mẫu 1',N'[Shopee - Data Engineer] - Phạm Thị C',N'Kính gửi Phòng nhân sự Công ty Shopee,<br><br>

Em tên là Phạm Thị C, thông qua diễn đàn Data Engineering Vietnam, em được biết Quý công ty đang có nhu cầu tuyển dụng vị trí Data Engineer. Vì vậy, em viết thư này để bày tỏ nguyện vọng được trở thành một phần của đội ngũ xử lý dữ liệu tại Shopee. Em vừa tốt nghiệp Đại học Công nghệ - ĐHQGHN, chuyên ngành Khoa học dữ liệu.<br><br>

Trong quá trình học tập, em đã được đào tạo về các công nghệ xử lý dữ liệu hiện đại bao gồm: thiết kế data pipeline với Apache Airflow, xử lý dữ liệu lớn với Spark và Hadoop, phát triển ETL job, và tối ưu hóa truy vấn SQL. Em cũng thành thạo các công cụ như Docker, Kubernetes và có kinh nghiệm làm việc với cloud platform AWS.<br><br>

Với niềm đam mê về Big Data, em thường xuyên nghiên cứu các công nghệ mới trong lĩnh vực xử lý dữ liệu và tham gia các project open source. Em đặc biệt quan tâm đến việc xây dựng hệ thống data warehouse có khả năng mở rộng cao.<br><br>

Trải qua thời gian học tập chăm chỉ, em đã đạt GPA 3.7/4.0 và hoàn thành các chứng chỉ AWS Data Analytics Specialty và Google Data Engineer. Em cũng có 5 tháng thực tập tại Tiki, nơi em được tham gia vào dự án xây dựng hệ thống recommendation engine.<br><br>

Em tin rằng với nền tảng kiến thức về data engineering và sự nhiệt huyết trong công việc, em sẽ đóng góp hiệu quả vào các dự án dữ liệu của Shopee. Em đã đính kèm CV và portfolio các dự án đã thực hiện.<br><br>

Cảm ơn Quý công ty đã dành thời gian đọc email ứng tuyển của em.<br><br>

Trân trọng,<br><br>',N'[Ký Tên]'
),
(
	2,N'Mẫu 2',N'[FPT Software - Developer] - Nguyễn Văn A',N'Kính gửi Phòng nhân sự Công ty FPT Software,<br><br>

Em tên là Nguyễn Văn A, thông qua trang tuyển dụng ITviec, em được biết Quý công ty đang có nhu cầu tuyển dụng vị trí Full-stack Developer. Vì vậy, em viết thư này để bày tỏ mong muốn được đóng góp cho vị trí này. Em vừa tốt nghiệp loại giỏi Đại học Công nghệ - ĐHQGHN, chuyên ngành Công nghệ phần mềm.<br><br>

Trong quá trình học tập tại trường, em đã tích lũy được các kiến thức và kỹ năng chuyên sâu về lập trình bao gồm: thiết kế giao diện với ReactJS và Angular, xây dựng REST API với NodeJS và ExpressJS, thiết kế cơ sở dữ liệu với MongoDB và MySQL, và sử dụng thành thạo Git để quản lý source code. <br><br>

Với sự say mê về lập trình, em thường xuyên dành thời gian nghiên cứu những công nghệ mới và làm các side project để nâng cao kỹ năng code. Hiện tại em đang tự học thêm về Microservices và Docker để phát triển khả năng làm việc với hệ thống lớn.<br><br>

Trải qua thời gian học tập chăm chỉ, em đã đạt được điểm GPA 3.6/4.0 và giành giải nhì cuộc thi "Sinh viên nghiên cứu khoa học" cấp trường với đề tài xây dựng hệ thống chatbot tư vấn tuyển sinh. Ngoài ra em còn hoàn thành các chứng chỉ AWS Cloud Practitioner và MongoDB Developer.<br><br>

Với nền tảng kiến thức và niềm đam mê công nghệ, em tin rằng mình có thể đóng góp tích cực vào các dự án của FPT Software. Em đã đính kèm CV và portfolio các project đã làm trong email này. Em rất mong có cơ hội được trao đổi trực tiếp về năng lực chuyên môn của mình.<br><br>

Cảm ơn Quý công ty đã dành thời gian đọc email ứng tuyển của em.<br><br>
',N'[Kí Tên]'
)
insert into templateLT values
(
	3,N'Mẫu Tiếng Anh',N'Ms Nguyen Van B<br><br>
						HR Manager<br><br>
						ABC manufacturing company<br><br>
						Tan Binh, HCMCT<br><br>

						Dear Ms. B,<br><br>

						Apply to: Accountant position<br><br>',N'

						I am writing to apply for the Accountant position which was advertised on the Careerlink.vn website.<br><br>

						I completed my Bachelor degree with an accounting major in 2012. After graduation, I worked as an Accountant at DEF manufacturing company. My duties included reconciling bank transaction and all payment by cash and credit card to make sure all accuracy, supervising all payable accountant/receivable accountant, assisting Chief Accountant to check the accountants record, making tax reports example: VAT, PIT and CIT, calculating Fixed asset and prepared expenses.<br><br>
						
						You will find me to be a positive, motivated and hard-working person who is keen to learn and contribute. Given the opportunity, I would apply myself with enthusiasm to all tasks, ensuring that I get the job done accurately and efficiently.<br><br>

						As part of my application I have attached my resume for your consideration. I look forward to meeting with you and discussing my qualifications in more detail.<br><br>

						Yours sincerely,<br><br>',N'[Your name]'
),
(
	2,N'Mẫu Tiếng Anh',N'Subject: Long Hoang - HR Specialist Job Application - ABC Company<br><br>

Dear Hiring Manager,<br><br>',N'

I hope this email finds you well. My name is Long Hoang. I came across the HR position at ABC Company through aroma.vn, and I am excited about the opportunity to contribute to your team.<br><br>

With over 2 years of experience, I have developed a solid foundation in recruitment, performance management, and employee relations. I believe that my skills and experience align well with the requirements of this position.<br><br>

I have attached my CV and cover letter for your review. They provide further details about my qualifications and accomplishments in the field of Human Resources.<br><br>

Thank you for considering my application. I look forward to hearing from you soon.<br><br>

Yours faithfully,<br><br>

Best,<br><br>',N'[Your name]'
),
(
	1,N'Mẫu Tiếng Anh',N'Subject: Excited to Apply for [Job Title] – [Your Name]

Dear [Hiring Manager’s Name]',N'I’m excited to apply for the [Job Title] position at [Company Name]. With a strong background in [Your Field] and experience in [Key Skills], I’m confident that I can make a meaningful contribution to your team.<br><br>

At [Previous Company], I [mention a key achievement or skill relevant to the job]. My ability to [specific skill] has helped me [explain how it benefited your previous company or project]. I’m eager to bring that same energy and expertise to your organization.<br><br>

I’d love the opportunity to chat about how I can add value to your team. Please find my resume attached, and let me know if there’s a time that works for you.<br><br>

Looking forward to your response!<br><br>

Best regards,<br><br>',N'[Your name]'
)