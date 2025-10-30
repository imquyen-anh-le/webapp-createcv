// Phần tạo CV 
const contentCV = document.querySelector('.content_CV');
const paper = document.querySelector('.paper');
const heading_paper = document.querySelector('.heading_paper');
const content_left = document.querySelector('.content-left');
let partsBig_in_CV = document.querySelectorAll('.part_ct');
let textElements = document.querySelectorAll('.possible_Part'); // phần có thể chỉnh sửa textcontent
let content_headingCV = document.querySelectorAll(".introduce b,.introduce p");
let part_content = document.querySelectorAll(".content-left .paragraph"); // những phần để chỉnh sửa lên xuống dòng giữa các tờ giấy
let Item_in_each_Part = document.querySelectorAll(".item_in_part"); // phần để tính toán chia giấy 
let instruct = document.querySelector(".instruct");

// khi chuyển mẫu thì tiến hành chuyển hết nội dung của phần contentCV vào phần half-left hoăc two , 
// sao đó tiến hành luôn đo giấy và redistribute phần tử
let total_paper = document.querySelectorAll('.paper'); // lấy ra all số giấy 

// Phần gợi ý CV 
let suggest = [
    // ----------- Phần overview --------------
    {
        heading: {
            title: "overview",  
            describe : "Phần giới thiệu bản thân thường được viết một cách ngắn gọn, linh hoạt nhằm làm nổi bật tiến trình nghề nghiệp, thành tích và các kỹ năng của bạn.",
            rank : {
                title : "Mức độ Ưu Tiên",
                top : "2"
            }
        },
        content: [
            // Phần nội dung 
            [{
                titleContent : "Bắt đầu với một vị trí công việc chuyên nghiệp",
                text: "Bắt đầu phần giới thiệu bản thân với vị trí công việc từng làm có liên quan tới vị trí đang ứng tuyển góp phần thu hút nhà tuyển dụng và cho họ thấy rằng CV của bạn đang hướng tới một công việc cụ thể."
            },
            {
                titleContent : "Thêm hai hoặc ba thành tích đạt được",
                text: "Bổ sung số liệu và các thông tin chi tiết. Tập trung vào kết quả giúp bạn nổi bật và khẳng định với nhà tuyển dụng rằng bạn là một ứng cử viên phù hợp."
            },
            {
                titleContent : "Điều chỉnh cho phù hợp với JD",
                text: "Tìm từ khóa trong mô tả công việc mà nhà tuyển dụng cung cấp, bao gồm các kỹ năng và phẩm chất cần thiết (tận tâm, chăm chỉ) và thêm chúng vào phần giới thiệu bản thân trong CV."
            }],
            // Phần ví dụ
            [
                    {
                        titleExample1: "✨ CV ứng tuyển vị trí Kế toán",
                        company: "Với hơn 10 năm kinh nghiệm làm việc trong lĩnh vực kế toán và tài chính cũng như kinh nghiệm chuyên môn với nhiều chương trình kế toán phổ biến nhất (MISA, FAST), tôi mong muốn tìm kiếm cơ hội làm việc trong môi trường chuyên nghiệp và góp phần cải thiện tài chính của tổ chức.",
                        time: "",
                        describe: {
                            describe_ti : "",
                            content : [
                            ]
                        },
                        results: {
                            results_ti : "",
                            content : [
                            ]
                        }
                    },
                    {
                        titleExample1: "✨ CV ứng tuyển vị trí Designer",
                        company: "Là một graphic designer trẻ đầy đam mê và nhiệt huyết, với những kiến thức học được cùng sự sáng tạo, gu thẩm mỹ và hơn 2 năm kinh nghiệm làm việc, tôi hi vọng có thể đóng góp vào sự phát triển của công ty.",
                        time: "",
                        describe: {
                            describe_ti : "",
                            content : [
                            ]
                        },
                        results: {
                            results_ti : "",
                            content : [
                            ]
                        }
                    }
            ],
            [{
                attention: ""
            }]
        ]
    },
     // ----------- Phần Work Experience --------------
    {
        heading: {
            title: "workexperience",
            describe : "Liệt kê kinh nghiệm làm việc của bạn, thêm các vị trí công việc khác nhau mà bạn đã nắm giữ và mô tả trách nhiệm của bạn. Đừng quên làm nổi bật những thành tựu lớn nhất của bản thân!"
            ,rank : {
                title : "Mức độ Ưu Tiên",
                top : "5"
            }
        },
        content: [
            // Phần nội dung 
            [
            {
                titleContent : "Sử dụng thứ tự thời gian đảo ngược",
                text: "Bắt đầu với vị trí công việc hiện tại (hoặc gần đây nhất) của bạn, sau đó liệt kê tất cả các vị trí trước đó đã đảm nhiệm."
            },
            {
                titleContent : "Sử dụng gạch đầu dòng (hoặc các dấu đầu dòng khác",
                text: "Điều này giúp bạn liệt kê các ý một cách rõ ràng và rành mạch hơn. Ngoài ra, khi mô tả tránh viết dài và nhiều chữ, bạn nên viết khoảng 6 - 8 ý."
            },
            {
                titleContent : "Thêm thành tích",
                text: "Khi mô tả về một vị trí công việc đã đảm nhận, bạn nên liệt kê thêm các thành tích đã đạt được nhằm thu hút nhà tuyển dụng. Hơn nữa, bạn nên thêm số liệu cụ thể và không đưa ra thông tin nhạy cảm."
            },
            {
                titleContent : "Tính phù hợp",
                text: "Tính phù hợp thể hiện ở việc bạn chọn kinh nghiệm phù hợp với vị trí công việc đang ứng tuyển và xóa bỏ mọi thông tin không cần thiết.Chú ý: Sử dụng động từ để bắt đầu mô tả một kinh nghiệm. Sử dụng các từ có tác động mạnh nhằm làm nổi bật các ưu điểm của bạn."
            }
            ],
            // Phần ví dụ
            [
                {
                    titleExample1: "👨‍💼 FULLSTACK .NET DEVELOPER",
                    company: "Lập Trình viên với hơn 4 năm kinh nghiệm , trong đó có hơn 2 năm làm việc với vai trò Full-Stack Devoloper, chuyên sâu về phát triển web với các công nghệ như .NET core,ReactJS và SQL Sever. Có kinh nghiệm lãnh đạo nhóm, thiết kế hệ thống và tối ưu hóa hiệu suất phần mềm. Đam me tạo ra các giải pháp phần mềm sáng tạo, đáp ứng yêu cầu khách hàng và người dung cuối. Mục tiêu trở thành Senior Developer, xây dựng các dự án lớn và đóng góp và mang lại giá trị cho doanh nghiệp",
                    time: "10/2016 - Nay",
                    describe: {
                        describe_ti : "Mô tả công việc",
                        content : [
                        "Xây dựng và thực hiện các kế hoạch Marketing nhằm phát triển thương hiệu, dịch vụ cho Công ty",
                        "Báo cáo, đề xuất các phương án mới, hiệu quả để đạt được mục tiêu doanh thu",
                        "Lập kế hoạch chương trình quảng cáo, khuyến mãi PR... cho hàng hóa và thương hiệu Công ty",
                        "Chịu trách nhiệm và tham mưu cho Giám đốc Marketing mọi hoạt động liên quan đến hoạt động Marketing phù hợp với định hướng của Công ty"
                        ]
                    },
                    results: {
                        results_ti : "🏅 Thành tích đạt được",
                        content : [
                        "Hoàn thành kế hoạch đạt doanh số KPI đề ra, tăng 25% doanh số so với năm ngoái",
                        "Góp phần lên kế hoạch dài hạn cho quá trình phát triển thương hiệu của Công ty"
                        ]
                    },
                }
            ],
            [{
                attention: ""
            }]
        ]
    },
    // ----------- Phần Education --------------
    {
        heading: {
            title: "education",
            describe : "Liệt kê các trường, cao đẳng và đại học mà bạn đã theo học. Mô tả trình độ học vấn bằng cách thêm thông tin về chuyên ngành hoặc các hoạt động ngoại khóa mà bạn đã tham gia trong quá trình học."
            ,rank : {
                title : "Mức độ Ưu Tiên",
                top : "7"
            }
        },
        content: [
            // Phần nội dung 
            [
            {
                titleContent : "Trường Hợp Ưu Tiên",
                text: "Nếu bạn đã có hơn hai năm kinh nghiệm làm việc, phần trình độ học vấn nên đặt sau kinh nghiệm làm việc."
            },
            {
                titleContent : "Học Vấn Bản Thân",
                text: "Thêm thông tin về chuyên ngành, tên trường đại học, thời gian và xếp loại bằng tốt nghiệp của bạn."
            },
            {
                titleContent : "Một số bằng cấp Khóa học có liên quan",
                text: "Bạn Cũng có thể đưa ra 1 vài Bằng Cấp liên quan hoặc khóa học mà bạn bạn đã được tiếp cận. Không quá lạm dụng và viết quá nhiều nếu không thực sự cần thiết và liên quan"
            },
            {
                titleContent : "Thành Tích Nổi Bật ",
                text: "Bạn có thể thêm thành tích học tập nếu muốn. Các thành tích có thể bao gồm bảng điểm, học bổng, giải thưởng, ..."
            }
            ],
            // Phần ví dụ
            [
                {
                    titleExample1: "Trường Đại học FBU",
                    time: "10/2016 - Nay",
                    describe : {
                        describe_ti : "🧩 Chuyên ngành Quản trị kinh doanh",
                        content : [
                        "Xếp loại tốt nghiệp: Giỏi",
                        "Điểm tích lũy: 3.2/4",
                        "Hệ chính quy"
                        ]
                    },
                    results : {
                        results_ti : "🏅 Thành tích đạt được",
                        content : [
                        "Đạt học bổng dành cho sinh viên xuất sắc tại tất cả 8 kỳ học tại trường",
                        "Nhận bằng khen của trường dành cho sinh viên đạt kết quả xuất sắc trong học tập"
                        ]
                    },
                }
            ],
            [{
                attention: ""
            }]
        ]
    },
    // ----------- Phần Skill --------------
    {
        heading: {
            title: "skill",
            describe : "Phần này cho nhà tuyển dụng biết được những gì bạn có thể làm. Các kỹ năng khác nhau như 'Giải quyết vấn đề' hoặc 'Tin học văn phòng' nên được thêm vào để thể hiện khả năng của bạn."
            ,rank : {
                title : "Mức độ Ưu Tiên",
                top : "4"
            }
        },
        content: [
            // Phần nội dung 
            [
            {
                titleContent : "Trường hợp ưu tiên",
                text: "Nếu CV của bạn dài hơn 1 trang thì bạn nên đặt phần này tại trang đầu tiên."
            },
            {
                titleContent : "Đảm bảo tính phù hợp và rõ ràng",
                text: "Nên lựa chọn các kỹ năng phù hợp với công việc đang ứng tuyển,liệt kê từ 4-6 kỹ năng quan trọng nhất và đặt các kỹ năng quan trọng nhất lên đầu danh sách và giải thích cách bạn đã sử dụng chúng trong dự án thực tế cùng kết quả đạt được, Ưu tiên kỹ năng có thể chứng minh qua kinh nghiệm làm việc"
            },
            {
                titleContent : "Kỹ năng Mềm & Kỹ năng chuyên môn",
                text: "kĩ năng nên chia thành 2 phần là kĩ năng chuyên môn và kĩ năng mềm ( team work, giải quyết vấn đề , làm việc nhóm , thái độ làm việc , tư duy phản biện , tư duy logic , tư duy tranh luận ,ham học hỏi  ... )"
            },
            {
                titleContent : "Làm nổi bật CV để gây ấn tượng đối với HR",
                text: "Trong một vài trường hợp cụ thể, hãy suy nghĩ về cách viết làm cho bạn nổi bật hơn. Ví dụ, thay vì liệt kê kỹ năng Tin học văn phòng, bạn có thể đề cập tới các kiến thức nâng cao về Microsoft Excel như Macro hay Pivot table để lập báo cáo, thống kê."
            }
            ,
            {
                titleContent : "Tư Duy Lý Tính",
                text: "tư duy phản biện , tư duy logic , tư duy tranh luận, tư duy chiến lược và phân tích , ... "
            }
            ,
            {
                titleContent : "Lưu Ý",
                text: "Không Nên diễn tả mức độ thành thạo của 1 ngôn ngữ hoặc kĩ năng nào đó bằng cột hoặc thang điểm hoặc tương tự như vậy để đo lường nó sẽ tạo cảm giác đại khái và ước chừng không thiện cảm đối với nhà tuyển dụng"
            }
            ],
            // Phần ví dụ
            [
                {
                    titleExample1: "🚀 Kỹ Năng Chuyên Môn",
                    company: "",
                    time: "",
                    describe : {
                        describe_ti : "Mô tả",
                        content : [
                        "HTML, CSS, JavaScript (ReactJS, React-Native, Lit)",
                        "Server (Apache, Nginx, Redis, Memcached, Queue, Log, Crontjob...), Rancher, K8S, Docker",
                        "RESTful API, GraphQL",
                        "Python"
                        ]
                    },
                    results : {
                        results_ti : "",
                        content : [                
                        ]
                    },
                },
                {
                    titleExample1: "🚀 Kỹ Năng Mềm",
                    company: "",
                    time: "",
                    describe : {
                        describe_ti : "Mô tả",
                        content : [
                        "Kỹ năng giao tiếp",
                        "Giải quyết vấn đề",
                        "Tự Học và Nghiên Cứu",
                        "Quản lý thời gian và Làm Việc nhóm"
                        ]
                    },
                    results : {
                        results_ti : "",
                        content : [                
                        ]
                    },
                }
            ],
            [{
                attention: "Chú ý: Bạn không nên sử dụng thang điểm đánh giá hay biểu tượng (hình học hoặc thanh kéo) để thể hiện các cấp độ cho từng kỹ năng. Điều này không để lại ấn tượng tốt cho nhà tuyển dụng."
            }]
        ]
    },
    // ----------- Phần Project --------------
    {
        heading: {
            title: "project",
            describe : "Phần Project giúp bạn chứng minh cho nhà tuyển dụng rằng bạn không chỉ học lý thuyết mà còn biết cách áp dụng nó vào thực tế.  Nhà tuyển dụng có thể nhìn vào dự án để đánh giá khả năng làm việc với các công nghệ mà bạn đang sử dụng"
            ,rank : {
                title : "Mức độ Ưu Tiên",
                top : "6"
            }
        },
        content: [
            // Phần nội dung 
            [
            {
                titleContent : "Tầm quan trọng của dự án trong CV",
                text: "Luôn cố gắng liệt kê hết tất cả những dự án phù hợp nhất mà bạn đã thực hiện và đưa những dự án gần đây nhất lên trên đầu. Với sinh viên, việc có các dự án cá nhân hoặc nhóm là cách tốt nhất để bù đắp cho sự thiếu kinh nghiệm làm việc trong ngành"
            },
            {
                titleContent : "Cách trình bày dự án trong CV",
                text: "Hãy liệt kê tên của dự án và một đoạn mô tả ngắn về nội dung của dự án cũng như các kỹ năng bạn đã phát triển/có được trong quá trình thực hiện."
            },
            {
                titleContent : "Lưu ý khi mô tả dự án",
                text: "Lưu ý: Đừng chỉ viết tên dự án - thay vào đó, hãy cố gắng đưa ra một bản tóm tắt về dự án, những kiến thức bạn đã áp dụng và những kỹ năng bạn đã phát triển cùng dự án đó."
            }
            ],
            // Phần ví dụ
            [
                {
                    titleExample1: "Dự án MyCV.vn (06/2018 - Nay)",
                    company: "Ứng dụng tạo CV nhanh chóng, dễ dàng và tải xuống miễn phí PDF",
                    time: "10/2016 - Nay",
                    describe : {
                        describe_ti : "Mô tả công việc",
                        content : [
                        "Khách hàng: Công ty CP MyCV",
                        "Mô tả dự án: Tạo CV nhanh chóng, dễ dàng và tải xuống miễn phí PDF",
                        "Số thành viên: 10",
                        "Chức vụ: Project manager",
                        "Chịu trách nhiệm: Quản lý dự án, lên quy trình dự án, giao việc cho các thành viên",
                        "Công nghệ sử dụng: Frontend: HTML, CSS, Jquery. Backend: C#, MySQL Server",
                        "..."
                        ]
                    },
                    results : {
                        results_ti : "",
                        content : [
                        
                        ]
                    },
                }
            ],
            [{
                attention: ""
            }]
        ]
    },
    // ----------- Phần Awards --------------
    {
        heading: {
            title: "awards",
            describe : "Đây cũng là một phần nội dung không bắt buộc. Liệt Kê Các giải thưởng thường phản ánh những kỹ năng quan trọng mà nhà tuyển dụng tìm kiếm, như kỹ năng lập trình, tư duy logic, làm việc nhóm, hoặc khả năng giải quyết vấn đề."
            ,rank : {
                title : "Mức độ Ưu Tiên",
                top : "9"
            }
        },
        content: [
            // Phần nội dung 
            [
            {
                titleContent : "Khi nào nên thêm phần Awards vào CV?",
                text: "bạn chỉ nên thêm phần này nếu thành tích/giải thưởng không đề cập được cùng với nội dung về trình độ học vấn hay kinh nghiệm làm việc."
            },
            {
                titleContent : "Cách phân loại và trình bày giải thưởng",
                text: "Học bổng có thể được thêm vào trong phần trình độ học vấn. Giải thưởng bạn nhận được cho những nỗ lực của bạn trong công việc sẽ được đề cập tới trong phần kinh nghiệm. Tuy nhiên, nếu bạn được trao giải vì đã làm một điều gì đó ngoài phạm vi công việc thông thường của bạn, hãy nhắc tới một cách tự hào trong phần nội dung này."
            },
            {
                titleContent : "Mô tả cụ thể nội dung giải thưởng",
                text: "Nội dung chi tiết cho từng giải thưởng bao gồm: Thời gian (ngày nhận), quy mô (khu vực, quốc gia hay quốc tế...), mục đích của giải thưởng, các thành tựu được công nhận và ý nghĩa của chúng. Ngoài ra, hãy cho một nhà tuyển dụng biết rằng hiện tại, bạn vẫn còn tất cả các kỹ năng đã mang lại cho bạn giải thưởng đó."
            },
            {
                titleContent : "Chỉ liệt kê các giải thưởng liên quan",
                text: "Hãy tập trung vào các giải thưởng liên quan trực tiếp đến ngành mà bạn đang muốn xin việc"
            },
            {
                titleContent : "Chú ý",
                text: "Chỉ liệt kê các thành tích trong một phần riêng biệt nếu chúng đủ đáng chú ý."
            }
            ],
            // Phần ví dụ
            [
                {
                    titleExample1: "",
                    company: "",
                    time: "10/2016",
                    describe : {
                        describe_ti : "Mô tả công việc",
                        content : [
                            "Nhân viên có thành tích xuất sắc trong công tác thi đua năm (12/2017)"
                        ]
                    },
                    results : {
                        results_ti : "",
                        content : [
                        
                        ]   
                    },
                }
            ],
            [{
                attention: ""
            }]
        ]
    },
     // ----------- Phần Mục Tiêu Công Việc --------------
    {
        heading: {
            title: "goals",
            describe : "Mục tiêu nghề nghiệp là một trong những phần quan trọng nhất trong CV. Đây là phần thông tin bổ trợ cho kinh nghiệm và kỹ năng của bạn cũng như cho nhà tuyển dụng thấy được tham vọng của bạn đối với công việc đang ứng tuyển."
            ,rank : {
                title : "Mức độ Ưu Tiên",
                top : "3"
            }
        },
        content: [
            // Phần nội dung 
            [
            {
                titleContent : "Đặt mục tiêu nghề nghiệp của bạn ở đâu",
                text: "Mục tiêu nghề nghiệp nên được trình bày ngắn gọn và hấp dẫn. Điều này khiến nhà tuyển dụng thấy được lý do tại sao họ nên nhận bạn hơn bất kỳ ai khác.",
                text2 : "Thông thường, các mục tiêu này được đặt dưới phần tên và thông tin cá nhân của bạn trong CV, trước khi bắt đầu các nội dung chi tiết về trình độ học vấn, kỹ năng và kinh nghiệm của bạn."
            },
            {
                titleContent : "Ngắn gọn",
                text: "Một CV thường được trình bày trong khoảng 1-2 trang, vì vậy mỗi phần trình bày nên xúc tích và đi thẳng vào trọng tâm. Mục tiêu nghề nghiệp của bạn thậm chí còn có vai trò quan trọng hơn, vì nó được đặt trước tất cả các thông tin khác, và đó là phần đầu tiên các nhà tuyển dụng đọc khi cầm CV của bạn.",
                text2 : "Một mục tiêu nghề nghiệp ngắn gọn nhưng hấp dẫn sẽ thôi thúc nhà tuyển dụng tìm hiểu những nội dung còn lại trong CV. Vì vậy, bạn nên trình bày trong phạm vi không quá năm dòng."            
            },
            {
                titleContent : "Hướng đến sự phát triển dài hạn",
                text: "Sự rõ ràng và trung thực về tham vọng của bản thân mang lại lợi ích cho cả bạn và các nhà tuyển dụng. Bạn không chỉ có thể tránh các cuộc trò chuyện khó xử tiềm ẩn với các đồng nghiệp và nhà tuyển dụng trong tương lai, mà các nhà tuyển dụng cũng biết cách làm thế nào để giúp bạn phù hợp hơn với vị trí công việc, chẳng hạn như cung cấp các cơ hội học tập và phát triển phù hợp hơn và đưa ra những lời khuyên thiết thực nhất cho bạn."
                ,text2 : "Cho thấy bạn có tinh thần cầu tiến, muốn học hỏi và gắn bó với công ty."
            },
            {
                titleContent : "Cụ thể hóa mục tiêu nghề nghiệp cho từng vị trí công việc",
                text: "Giống như bạn cần điều chỉnh sơ yếu lý lịch của mình sao cho phù hợp với từng công ty và vị trí ứng tuyển, bạn cũng sẽ cần cụ thể hóa mục tiêu nghề nghiệp của mình cho từng vị trí khác nhau.",
                text2: "Một nội dung chung chung sẽ không giúp bạn thành công trong việc thu hút nhà tuyển dụng, thậm chí không phù hợp để áp dụng trong một số trường hợp cụ thể."
            }
            ],
            // Phần ví dụ
            [
                {
                    titleExample1: "📅 Ngắn Hạn",
                    company: "",
                    time: "",
                    describe : {
                        describe_ti : "Mô tả công việc",
                        content : [
                            "Áp dụng những kinh nghiệm về kỹ năng giao tiếp và bán hàng, sự hiểu biết về tâm lý và nhu cầu khách hàng để trở thành một nhân viên kinh doanh xuất sắc tại công ty."
                        ]
                    },
                    results : {
                        results_ti : "",
                        content : [
                        ]
                    },
                },
                {
                    titleExample1: "📅 Dài Hạn",
                    company: "",
                    time: "",
                    describe : {
                        describe_ti : "Mô tả công việc",
                        content : [
                            "Trở thành trưởng phòng kinh doanh/giám đốc kinh doanh. Sẵn sàng dẫn, chia sẻ kiến thức, kinh nghiệm cho các thành viên nhằm hướng tới mục tiêu và hiệu quả cao nhất cho công ty."
                        ]
                    },
                    results : {
                        results_ti : "",
                        content : [
                        ]
                    },
                }
            ],
            [{
                attention: ""
            }]
        ]
    },
    // ----------- Phần Chứng Chỉ --------------
    {
        heading: {
            title: "certificate",
            describe : "Nếu đạt được bất kỳ chứng chỉ nào, hãy chắc chắn bạn liệt kê trong phần nội dung này. Đây là một cách tuyệt vời để xây dựng niềm tin cho nhà tuyển dụng, giúp nhà tuyển dụng đánh giá trình độ học vấn và năng lực chuyên môn của bạn"
            ,rank : {
                title : "Mức độ Ưu Tiên",
                top : "8"
            }
        },
        content: [
            // Phần nội dung 
            [
            {
                titleContent : "Đưa chứng chỉ quan trọng nhất lên trên đầu",
                text: "Tuy nhiên, lưu ý rằng bạn chỉ nên thêm các chứng chỉ có liên quan tới vị trí mà bạn đang ứng tuyển. Đặt chứng chỉ quan trọng nhất ở đầu danh sách. và đặc biệt lưu ý Không liệt kê chứng chỉ không liên quan, thiếu uy tín"
            },
            {
                titleContent : "Liệt Kê và Thông Tin đầy đủ về chứng chỉ & bằng cấp",
                text: "Trong một số ngành nghề, chứng chỉ có tầm quan trọng như bằng cấp học thuật. Chẳng hạn như chứng chỉ ACCA cho việc chuyên gia trong lĩnh vực kế toán – tài chính được cả thế giới công nhận về trình độ, nghiệp vụ chuyên ngành.",
                text2: "Đối với mỗi chứng nhận, bạn cần liệt kê tổ chức chứng nhận, loại hình và lĩnh vực chuyên môn cũng như ngày nhận chứng chỉ."
            }
            ],
            // Phần ví dụ
            [
                {
                    titleExample1: "🎓 Chứng chỉ tiếng Anh (07/2018)",
                    company: "",
                    time: "10/2016",
                    describe : {
                        describe_ti : "Mô tả công việc",
                        content : [
                            "C1 / IELTS 7.5 / TOEIC 900 / ..."
                        ]
                    },
                    results : {
                        results_ti : "",
                        content : [
                        
                        ]   
                    },
                }
            ],
            [{
                attention: ""
            }]
        ]
    },
    // ----------- Phần Ngôn Ngữ --------------
    {
        heading: {
            title: "language",
            describe : "Nếu bạn biết ngoại ngữ, hãy đưa chúng vào phần này vì nó sẽ là lợi thế cho bạn. Bạn có thể đánh giá trình độ ngoại ngữ bằng cách chia cấp độ hoặc thêm một mô tả ngắn (ví dụ: cấp độ B2 hoặc thông thạo)."
            ,rank : {
                title : "Mức độ Ưu Tiên",
                top : "9"
            }
        },
        content: [
            // Phần nội dung 
            [
            {
                titleContent : "Chỉ liệt kê những ngôn ngữ thực sự có thể sử dụng",
                text: "Không thêm ngoại ngữ nếu bạn chưa đủ kiến thức để giao tiếp."
            },
            {
                titleContent : "Mô tả bằng những con số cụ thể",
                text: "Không nên đánh giá trình độ ngoại ngữ theo thang điểm từ 1 - 5. Hãy nói cụ thể số điểm bạn đạt được (800 ielts) hoặc khả năng của bạn (nghe - nói - đọc - viết tốt, giao tiếp thành tạo, ...)",
                text2 : "Bạn có thể mô tả mức độ thông thạo của bạn trong từng ngôn ngữ"
            },
            {
                titleContent : "Lưu Ý",
                text: "Không nhầm lẫn giữa ngôn ngữ lập trình & ngôn ngữ giao tiếp ( chuyên ngành CNTT )"
            }
            ],
            // Phần ví dụ
            [
                {
                    titleExample1: "Tiếng Anh",
                    company: "",
                    time: "",
                    describe : {
                        describe_ti : "Mô tả",
                        content : [
                            "TOEIC 770 ,Thành thạo 4 kỹ năng: Nghe, nói, đọc, viết"
                        ]
                    },
                    results : {
                        results_ti : "",
                        content : [
                        
                        ]   
                    }
                }
            ],
            [{
                attention: ""
            }]
        ]
    },
    // ----------- Phần Khác ----------------
    {
        heading: {
            title: "another",
            describe : "Ngoài Các phần đã được xác đinh bạn cũng có thể thêm 1 phần hoàn toàn mới của riêng bạn"
            ,rank : {
                title : "Mức độ Ưu Tiên",
                top : "10"
            }
        },
        content: [
            // Phần nội dung 
            [
            {
                titleContent : "Lưu ý Quan Trọng",
                text: "Nếu CV của bạn đã quá dài thì bạn không nên thêm phần này nữa nếu không thực sự cần thiết"
            }
            ],
            // Phần ví dụ
            [
                {
                    titleExample1: "",
                    company: "",
                    time: "",
                    describe : {
                        describe_ti : "",
                        content : [
                            ""
                        ]
                    },
                    results : {
                        results_ti : "",
                        content : [
                        
                        ]   
                    }
                }
            ],
            [
            {
                attention: ""
            }
            ]
        ]
    },
    // ----------- Phần in4 ------------------
    {
        heading: {
            title: "information",
            describe : "Chỉ điền các thông tin bạn muốn thể hiện trên CV. Không thêm vào những nội dung không liên quan tới vị trí công việc đang ứng tuyến."
            ,rank : {
                title : "Mức độ Ưu Tiên",
                top : "1"
            }
        },
        content: [
            // Phần nội dung 
            [
            {
                titleContent : "Vị trí ứng tuyển",
                text: "Vị trí ứng tuyển thường được thêm vào dưới phần tên của bạn giúp tạo ấn tượng ban đầu với nhà tuyển dụng về một CV chuyên nghiệp."
            },
            {
                titleContent : "Ảnh cá nhân",
                text: "Bạn nên chọn hình ảnh có nền sáng, trực diện, nghiêm túc. Nên mặc trang phục công sở với các ngành nghề như: ngân hàng, luật, cơ quan nhà nước, ... và trang phục lịch sự với các ngành nghề khác. Nên mỉm cười nhẹ khi chụp ảnh để có thiện cảm hơn."
            },
            {
                titleContent : "Thông tin liên hệ",
                text: "Số điện thoại và địa chỉ thư điện tử là các thông tin cần thiết trong phần nội dung này. Bạn không cần cung cấp địa chỉ nhà riêng nếu nhà tuyển dụng không yêu cầu. (Bạn nên sử dụng địa chỉ thư điện tử mang tính chuyên nghiệp, nên chứa họ và tên của bạn)"
            },
            {
                titleContent : "Mạng xã hội",
                text: "Bạn có thể thêm đường dẫn tới website cá nhân cũng như các tài khoản mạng xã hội việc làm như Linkedin,Github,... mà bạn đang sử dụng. (Không nên sử dụng mạng xã hội cá nhân như Facebook vì có thể trang cá nhân của bạn sẽ chứa những thông tin đời tư không liên quan tới công việc)"
            }
            ],
            // Phần ví dụ
            [
                {
                    titleExample1: "Mạng xã hội",
                    company: "",
                    time: "",
                    describe : {
                        describe_ti : "",
                        content : [
                            "http://www.linkedin.com/in/name-surname/",
                            "http://www.linkedin.com/in/name-surname-5x551234/"
                        ]
                    },
                    results : {
                        results_ti : "",
                        content : [
                        
                        ]   
                    }
                }
            ],
            [
            {
                attention: "Chú ý: Nếu bạn đang ứng tuyển vào các công ty có liên quan tới các quốc gia như Mỹ, Anh, bạn không nên thêm hình ảnh cá nhân vì đây không phải là thói quen của khu vực này (chỉ thêm khi có sự yêu cầu)."
            }
            ]
        ]
    }
]

function suggest_CV(ele_in_suggest){
    instruct.innerHTML = `<div class="heading_suggest">
        <h2> ${ele_in_suggest.heading.title}</h2>
    </div>
    <div>
        <p style="margin-bottom: 20px"> 🗝️ ${ele_in_suggest.heading.describe}</p>
    </div>
    <div class="rank" style="display: flex;justify-content: space-between;">
        <p> <i class="fa-solid fa-trophy"></i> ${ele_in_suggest.heading.rank.title}</p>
        <span> ${ele_in_suggest.heading.rank.top}</span>
    </div>
    `
        ele_in_suggest.content[0].forEach(elem=>{
            instruct.innerHTML += `
                <div class="box_progress">
                    <span><i class="fa-solid fa-star"></i></span>
                    <h3>${elem.titleContent}</h3>
                </div>
                <div style="margin-bottom: 20px;"> <p> ✨ ${elem.text}</p></div>
                <div style="margin-bottom: 20px;"> <p> ${elem.text2 ? "✨ " + elem.text2 : ""}</p></div>
            `
        })
        if(ele_in_suggest.heading.title == "another"){
            return;
        }
        else{
            instruct.innerHTML += `
                    <h2 class="heading_suggest" style="margin-bottom: 20px;"> Ví Dụ </h2>
            `
            ele_in_suggest.content[1].forEach(elem=>{
                console.log(elem);
                instruct.innerHTML += `
                    <div style="margin-bottom: 12px;"> <b>${elem.titleExample1}</b> </div>
                    <div style="margin-bottom: 12px;"> <p>${elem.company || ""}</p> </div>
                    <div style="margin-bottom: 12px;"> <p> ${elem.time !== "" ? "<b>🕐 Time : </b>" + elem.time : ""}</p> </div>
                    <div style="margin-bottom: 12px;"> <b>${elem.describe.describe_ti || ""}</b> </div>
                `
                if(elem.describe.content.length > 0){
                    elem.describe.content.forEach(ele_in_describe=>{
                        instruct.innerHTML += `
                            <div style="margin-bottom: 12px;"> <p>${ele_in_describe}</p></div>
                        `
                    })
                }
                instruct.innerHTML += `
                    <div style="margin-bottom: 12px;"> <b>${elem.results.results_ti || "" }</b></div>
                `
                if(elem.results.content.length > 0){
                    elem.results.content.forEach(ele_in_results=>{
                        instruct.innerHTML += `
                            <div style="margin-bottom: 12px;"> <p>${ele_in_results}</p></div>
                        `
                    })
                }
            })
            instruct.innerHTML += `${ele_in_suggest.content[2].attention || ""}`
        }
    }
// khi click vào thì hiện luôn viền xanh và sao xanh

function getTemplateCV_Now(){
    let first_paper_now = document.querySelector(".paper");
    // console.log(first_paper_now.getAttribute("class").split(" "));
    if(first_paper_now.getAttribute("class").split(" ").length <= 1){
        // console.log("Lọt Vào mẫu 0 rồi !!");
        return "paper_mau0";
    }
    else{
        // console.log("Lọt Vào mẫu khác 0 rồi !!");
        return first_paper_now.getAttribute("class").split(" ")[1];
    }
}
// chính ló 
function getRemainingHeight(section_measuring) {
    let paper = section_measuring.closest(".paper");
    if(section_measuring.classList.contains("paper")){
        paper = section_measuring;
    }
    const paperHeight = paper.offsetHeight;
    const headingHeight = paper.querySelector('.heading_paper')?.offsetHeight || 0;
    const titleHeading = paper.querySelector('.title_HD')?.offsetHeight || 0;
    const phanPhu = paper.querySelector('.phan_phu')?.offsetHeight || 0;
    // lấy ra phàn padding bottom của mỗi giấy 
    const styles_ctCV = window.getComputedStyle(paper);
    let paddingBottom = parseInt(styles_ctCV.getPropertyValue("padding-bottom")); // 32px  
    let content_CV = paper.querySelector(".content_CV");
    let part_ct_inCv = paper.querySelectorAll(".part_ct");
    let bug_length = [];

    // mẫu 0; mẫu 1; mẫu 2 ; mẫu 3 ; 

    paddingBottom = parseInt(styles_ctCV.getPropertyValue("padding-bottom")); // 32px 
    margin_part_ct_inCv = part_ct_inCv.length * 12;
    let check;
    // lấy ra phần margin bottom của phần heading 
    if(getTemplateCV_Now() == "paper_mau1" || getTemplateCV_Now() == "paper_mau8"){ 
        const get_styles_hdCV = window.getComputedStyle(document.querySelector(".title_HD")) || 0;
        const styles_hdCV = parseInt(get_styles_hdCV.getPropertyValue("margin-bottom")) || 0;

        bug_length = content_CV.querySelectorAll(".title");
        if(getTemplateCV_Now() == "paper_mau8"){
            if(!paper.previousElementSibling.classList.contains("paper")){
                return paperHeight - titleHeading - paddingBottom * 2 - styles_hdCV - bug_length.length * 12 - 24 - margin_part_ct_inCv;
            }
        }
        return paperHeight - titleHeading - paddingBottom * 2 - styles_hdCV - margin_part_ct_inCv - bug_length.length * 10;
    }
    else if(getTemplateCV_Now() == "paper_mau3"){ 
        bug_length = content_CV.querySelectorAll(".title");
        return paperHeight - phanPhu - paddingBottom * 2 - bug_length.length*12 - margin_part_ct_inCv - margin_part_ct_inCv;
    }
    else if(getTemplateCV_Now() == "paper_mau10" ){
        console.log("Đang ở mẫu 10 đây !");
        let title_hd = paper.querySelector(".title_HD");
        let in4_in_ct = paper.querySelector(".information");
        const get_styles_ctCV = window.getComputedStyle(document.querySelector(".content_CV"));
        let height_pdt = parseInt(get_styles_ctCV.getPropertyValue("padding-top"));
        if(title_hd && in4_in_ct){
            let h_title_hd = title_hd.offsetHeight || 0;
            let h_in4_in_ct = in4_in_ct.offsetHeight || 0;
            console.log("Vào đây");
            return paperHeight - h_title_hd - h_in4_in_ct - paddingBottom - bug_length.length * 12 - height_pdt - 50 - margin_part_ct_inCv;
        }
        else{
            return paperHeight - paddingBottom - bug_length.length * 12 - height_pdt - margin_part_ct_inCv - 100;
        }
    }
    else if(getTemplateCV_Now() == "paper_mau6"){
        const get_styles_hdCV = window.getComputedStyle(document.querySelector(".heading_paper"));
        let height_mgbt = parseInt(get_styles_hdCV.getPropertyValue("margin-bottom"));
        const get_styles_ctCV = window.getComputedStyle(document.querySelector(".content_CV"));
        let height_pdt = parseInt(get_styles_ctCV.getPropertyValue("padding-top"));
        bug_length = content_CV.querySelectorAll(".title");

        return paperHeight - headingHeight - paddingBottom - height_mgbt - bug_length.length*16 - height_pdt - margin_part_ct_inCv;
    }
    else if(getTemplateCV_Now() == "paper_mau7"){
        const get_styles_hdCV = window.getComputedStyle(document.querySelector(".heading_paper"));
        let height_mgbt = parseInt(get_styles_hdCV.getPropertyValue("margin-bottom"));
        const get_styles_ctCV = window.getComputedStyle(document.querySelector(".content_CV"));
        let height_pdt = parseInt(get_styles_ctCV.getPropertyValue("padding-top"));
        bug_length = content_CV.querySelectorAll(".title");
        if(paper.querySelector(".introduce")){
            return paperHeight - headingHeight - paddingBottom - height_mgbt - bug_length.length*16 - height_pdt - margin_part_ct_inCv;
        }
        return paperHeight - headingHeight - paddingBottom - height_mgbt - bug_length.length*16 - height_pdt - margin_part_ct_inCv - 160;
    }
    else if(getTemplateCV_Now() == "paper_mau9"){
        const get_styles_hdCV = window.getComputedStyle(document.querySelector(".heading_paper"));
        let height_mgbt = parseInt(get_styles_hdCV.getPropertyValue("margin-bottom"));

        const get_styles_ctCV = window.getComputedStyle(document.querySelector(".content_CV"));
        let height_pdt = parseInt(get_styles_ctCV.getPropertyValue("padding-top"));
        bug_length = content_CV.querySelectorAll(".title");

        if(paper.querySelector(".introduce ")){
            return paperHeight - headingHeight - paddingBottom - height_mgbt - bug_length.length*8 - height_pdt - margin_part_ct_inCv;
        }
        return paperHeight - headingHeight - paddingBottom - height_mgbt - bug_length.length*16 - height_pdt - margin_part_ct_inCv;
    }
    else{
        const get_styles_hdCV = window.getComputedStyle(document.querySelector(".heading_paper"));
        const styles_hdCV = parseInt(get_styles_hdCV.getPropertyValue("margin-bottom"));
        const get_styles_ctCV = window.getComputedStyle(document.querySelector(".content_CV"));
        let height_pdt = parseInt(get_styles_ctCV.getPropertyValue("padding-top"));
        check = styles_hdCV;
        
        bug_length = content_CV.querySelectorAll(".title");
        part_ct_mgt =  section_measuring.querySelectorAll(".part_ct");
        if(getTemplateCV_Now() == "paper_mau11"){
            let hei_anh_CV = 0
            if(section_measuring.classList.contains("haft-left")){
                hei_anh_CV = paper.querySelector(".anh_CV").offsetHeight;
            }
            return paperHeight - headingHeight - paddingBottom - (bug_length.length * 12) - (part_ct_mgt.length * 12) - height_pdt - hei_anh_CV - margin_part_ct_inCv;
        }
        if(getTemplateCV_Now() == "paper_mau12"){
            let hei_anh_CV = 0
            if(section_measuring.classList.contains("haft-left")){
                hei_anh_CV = paper.querySelector(".anh_CV").offsetHeight;
            }
            return paperHeight - headingHeight - paddingBottom - (bug_length.length * 12) - (part_ct_mgt.length * 12) - height_pdt - hei_anh_CV - margin_part_ct_inCv;
        }
        if(getTemplateCV_Now() == "paper_mau0" || getTemplateCV_Now() == "paper_mau2"){
            let getalltagLi = paper.querySelectorAll("p");
            return paperHeight - headingHeight - paddingBottom - check - (bug_length.length * 12) - margin_part_ct_inCv;
        }
        else return paperHeight - headingHeight - paddingBottom - check - (bug_length.length * 12) - margin_part_ct_inCv;
    } 
}

const LAYOUT_CONFIG = {
    paperHeight: 1072,
    headerWidth: 210,
    padding: {
        top: 32,
        bottom: 32,
        left: 16,
        right: 16
    }
}; 

function getColorCVNow(){
    let getMauCvnow,colorNow;
    getMauCvnow = getTemplateCV_Now();

    if(getMauCvnow == "paper_mau1"){
        getMauCvnow = paper.querySelector(".half-left").style.backgroundColor;
        return getMauCvnow;
    }
    else if(getMauCvnow == "paper_mau5" || getMauCvnow == "paper_mau8" || getMauCvnow == "paper_mau10" || getMauCvnow == "paper_mau2"){
        if(getMauCvnow == "paper_mau5" || getMauCvnow == "paper_mau2"){
            getMauCvnow = paper.querySelector(".title_HD").style.color;
            return getMauCvnow;
        }
        else{
            getMauCvnow = paper.querySelector(".title_HD").style.backgroundColor;
            return getMauCvnow;
        }
    }
    else if(getMauCvnow == "paper_mau7"){
        getMauCvnow = paper.querySelector(".anh_CV").style.backgroundColor;
        return getMauCvnow;
    }
    else{
        getMauCvnow = paper.querySelector(".introduce").style.backgroundColor;
        return getMauCvnow;
    }
}
function getFont_n_fontSize(newpaper){
    if(paper.style.fontFamily){
        newpaper.style.fontFamily = paper.style.fontFamily;
    }
    else{
        newpaper.style.fontFamily = "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif";
    }
    if(paper.style.fontSize){
        newpaper.style.fontSize = paper.style.fontSize;
    }
    else{
        newpaper.style.fontSize = "13.5px";
    }
}
// hàm tạo giấy 
function createNewPaper() {
    const newPaper = document.createElement('div');
    newPaper.classList.add('paper');
    // newPaper.style.marginTop = '32px';
    // newPaper.style.padding = '32px';

    const newHeading = document.createElement('div');
    newHeading.classList.add('heading_paper','part_in_paper','half-left');
    // newHeading.style.display = "none";

    const anhcv = document.createElement('section');
    anhcv.classList.add("anh_CV");
    newHeading.appendChild(anhcv);

    const newContent = document.createElement('div');

    const halfLeft = document.createElement('section');
    halfLeft.classList.add("half-left");
    const halfRight = document.createElement('section');
    halfRight.classList.add("half-right");

    newContent.classList.add('content_CV','part_in_paper','part_two');
    newContent.style.padding = `${LAYOUT_CONFIG.padding.top}px 0`;
    newContent.appendChild(halfLeft);
    newContent.appendChild(halfRight);

    newPaper.appendChild(newHeading);
    newPaper.appendChild(newContent);
    newHeading.style.display = "none";
    getFont_n_fontSize(newPaper);
    
    return newPaper;
}
function createNewPaper1() {
    const newPaper = document.createElement('div');
    newPaper.classList.add('paper','paper_mau1');
    newPaper.style.marginTop = '32px';
    
    const newHeading = document.createElement('div');
    newHeading.classList.add('heading_paper','part_in_paper','half-left');
    const anhcv = document.createElement('section');
    anhcv.classList.add("anh_CV");
    newHeading.appendChild(anhcv);

    const newContent = document.createElement('div');
    newContent.classList.add('content_CV','part_in_paper','part_two');

    const halfLeft = document.createElement('section');
    halfLeft.classList.add("half-left")
    const halfRight = document.createElement('section');
    halfRight.classList.add("half-right");

    newContent.appendChild(halfLeft);
    newContent.appendChild(halfRight);
    newHeading.style.backgroundColor = getColorCVNow();
    newPaper.appendChild(newHeading);
    newPaper.appendChild(newContent);
    getFont_n_fontSize(newPaper);
    
    return newPaper;
}
function createNewPaper2() {
    const newPaper = document.createElement('div');
    newPaper.classList.add('paper','paper_mau2');
    newPaper.style.marginTop = '32px';
    newPaper.style.padding = '32px';
    
    const newHeading = document.createElement('div');
    newHeading.classList.add('heading_paper','part_in_paper','half-left');
            const anhcv = document.createElement('section');
    anhcv.classList.add("anh_CV");
    newHeading.appendChild(anhcv);

    const newContent = document.createElement('div');
    newContent.classList.add('content_CV','part_in_paper','part_two');

    const halfLeft = document.createElement('section');
    halfLeft.classList.add("half-left")
    const halfRight = document.createElement('section');
    halfRight.classList.add("half-right");

    newContent.appendChild(halfLeft);
    newContent.appendChild(halfRight);

    newPaper.appendChild(newHeading);
    newPaper.appendChild(newContent);
    newHeading.style.display = "none";
    getFont_n_fontSize(newPaper);
    
    return newPaper;
}
function createNewPaper3(){
    const newPaper = document.createElement('div');
    newPaper.classList.add('paper','paper_mau3');
    newPaper.style.marginTop = '32px';
    
    const newHeading = document.createElement('div');
    newHeading.classList.add('heading_paper','part_in_paper','half-left','hd_mau3');
            const anhcv = document.createElement('section');
    anhcv.classList.add("anh_CV");
    newHeading.appendChild(anhcv);

    const newContent = document.createElement('div');
    newContent.classList.add('content_CV','part_in_paper','part_two');
    const halfLeft = document.createElement('section');
    halfLeft.classList.add("half-left")
    const halfRight = document.createElement('section');
    halfRight.classList.add("half-right");
    newContent.appendChild(halfLeft);
    newContent.appendChild(halfRight);
    
    newPaper.appendChild(newHeading);
    newPaper.appendChild(newContent);
    newHeading.style.backgroundColor = getColorCVNow();
    newHeading.style.opacity = "0.42";
    getFont_n_fontSize(newPaper);
    
    return newPaper;
}
function createNewPaper4(){
    const newPaper = document.createElement('div');
    newPaper.classList.add('paper','paper_mau4');
    newPaper.style.marginTop = '32px';
    
    const newContent = document.createElement('div');
    newContent.classList.add('content_CV','part_in_paper');
    Object.assign(newContent.style, {
        width: `100%`,
        paddingTop: `${LAYOUT_CONFIG.padding.top}px`
    });
    const newHeading = document.createElement('div');
    newHeading.classList.add('heading_paper','part_in_paper','half-left','heading_paper_mau4');
        const anhcv = document.createElement('section');
    anhcv.classList.add("anh_CV");
    newHeading.appendChild(anhcv);
    newHeading.style.display = "none";
    const halfLeft = document.createElement('section');
    halfLeft.classList.add("half-left")
    const halfRight = document.createElement('section');
    halfRight.classList.add("half-right");
    halfLeft.classList.add('half-left');
    
    newContent.appendChild(halfLeft);
    newContent.appendChild(halfRight);
    newPaper.appendChild(newContent);
    newPaper.appendChild(newHeading);
    getFont_n_fontSize(newPaper);
    
    return newPaper;
}
function createNewPaper5(){
    const newPaper = document.createElement('div');
    newPaper.classList.add('paper','paper_mau4');
    newPaper.style.marginTop = '32px';
    
    const newContent = document.createElement('div');
    newContent.classList.add('content_CV','part_in_paper');
    Object.assign(newContent.style, {
        width: `100%`,
        paddingTop: `${LAYOUT_CONFIG.padding.top}px`
    });
    const newHeading = document.createElement('div');
    newHeading.classList.add('heading_paper','part_in_paper','half-left','heading_paper_mau5');
    const halfLeft = document.createElement('section');

    const anhcv = document.createElement('section');
    anhcv.classList.add("anh_CV");
    newHeading.appendChild(anhcv);
    newHeading.style.display = "none";
    halfLeft.classList.add("half-left")
    const halfRight = document.createElement('section');
    halfRight.classList.add("half-right");
    halfLeft.classList.add('part_one');
    
    newContent.appendChild(halfLeft);
    newContent.appendChild(halfRight);
    newPaper.appendChild(newContent);
    newPaper.appendChild(newHeading);
    getFont_n_fontSize(newPaper);
    
    return newPaper;
}
function createNewPaper6(){
    const newPaper = document.createElement('div');
    newPaper.classList.add('paper','paper_mau6');
    newPaper.style.marginTop = '32px';
    
    const newContent = document.createElement('div');
    newContent.classList.add('content_CV','part_in_paper');
    Object.assign(newContent.style, {
        width: `100%`,
        // paddingTop: `${LAYOUT_CONFIG.padding.top}px`
    });
    const newHeading = document.createElement('div');
    newHeading.classList.add('heading_paper','part_in_paper','part_one','heading_paper_mau6');
        const anhcv = document.createElement('section');
    anhcv.classList.add("anh_CV");
    newHeading.appendChild(anhcv);
    newHeading.style.display = "none";
    const halfLeft = document.createElement('section');
    halfLeft.classList.add("half-left")
    const halfRight = document.createElement('section');
    halfRight.classList.add("half-right");
    halfLeft.classList.add('part_one');
    
    newContent.appendChild(halfLeft);
    newContent.appendChild(halfRight);
    newPaper.appendChild(newContent);
    newPaper.appendChild(newHeading);
    getFont_n_fontSize(newPaper);
    
    return newPaper;
}
function createNewPaper7(){
    const newPaper = document.createElement('div');
    newPaper.classList.add('paper','paper_mau7');
    newPaper.style.marginTop = '32px';
    
    const newContent = document.createElement('div');
    newContent.classList.add('content_CV','part_in_paper');
    Object.assign(newContent.style, {
        width: `100%`,
        paddingTop: `${LAYOUT_CONFIG.padding.top}px`
    });
    const newHeading = document.createElement('div');
    newHeading.classList.add('heading_paper','part_in_paper','part_one','heading_paper_mau7');
    const halfLeft = document.createElement('section');
    const anhcv = document.createElement('section');
    anhcv.classList.add("anh_CV");
    newHeading.appendChild(anhcv);
    newHeading.style.display = "none";
    halfLeft.classList.add("half-left")
    const halfRight = document.createElement('section');
    halfRight.classList.add("half-right");
    halfLeft.classList.add('part_one');
    
    newContent.appendChild(halfLeft);
    newContent.appendChild(halfRight);
    newPaper.appendChild(newContent);
    newPaper.appendChild(newHeading);
    getFont_n_fontSize(newPaper);
    
    return newPaper;
}
function createNewPaper8() {
    const newPaper = document.createElement('div');
    newPaper.classList.add('paper','paper_mau8');
    newPaper.style.marginTop = '32px';
    
    const newHeading = document.createElement('div');
    newHeading.classList.add('heading_paper','part_in_paper','part_one','half-left');
    Object.assign(newHeading.style, {
        width: `${LAYOUT_CONFIG.headerWidth}px`,
        height: `${LAYOUT_CONFIG.paperHeight}px`,
        display : "block"
    });
    const anhcv = document.createElement('section');
    anhcv.classList.add("anh_CV");
    newHeading.appendChild(anhcv);
    
    const newContent = document.createElement('div');
    newContent.classList.add('content_CV','part_in_paper','part_two');
    Object.assign(newContent.style, {
        width: `calc(100% - ${LAYOUT_CONFIG.headerWidth}px)`,
        paddingTop: `${LAYOUT_CONFIG.padding.top}px`
    });
    const halfLeft = document.createElement('section');
    // halfLeft.classList.add("half-left")
    const halfRight = document.createElement('section');
    halfRight.classList.add("half-right");
    newContent.appendChild(halfLeft);
    newContent.appendChild(halfRight);
    
    newPaper.appendChild(newContent);
    newPaper.appendChild(newHeading);  
    getFont_n_fontSize(newPaper);
    
    return newPaper;
}
function createNewPaper9(){
    const newPaper = document.createElement('div');
    newPaper.classList.add('paper','paper_mau9');
    newPaper.style.marginTop = '32px';
    
    const newContent = document.createElement('div');
    newContent.classList.add('content_CV','part_in_paper');
    Object.assign(newContent.style, {
        width: `100%`,
        paddingTop: `${LAYOUT_CONFIG.padding.top}px`
    });
    const newHeading = document.createElement('div');
    newHeading.classList.add('heading_paper','part_in_paper','part_one','half-left');
        const anhcv = document.createElement('section');
    anhcv.classList.add("anh_CV");
    newHeading.appendChild(anhcv);
    newHeading.style.display = "none";
    const halfLeft = document.createElement('section');
    halfLeft.classList.add("half-left")
    const halfRight = document.createElement('section');
    halfRight.classList.add("half-right");
    halfLeft.classList.add('part_one');
    Object.assign(halfLeft.style, {
        width: `40%`,
        height: `${LAYOUT_CONFIG.paperHeight - 64}px`,
        paddingRight: `12px`,
        display : "block",
        borderRight : `1px solid rgb(221, 221, 221)`,
        left: "0"
    });
    
    halfRight.classList.add('part_two');
    Object.assign(halfRight.style, {
        width: `calc(100% - ${LAYOUT_CONFIG.headerWidth}px)`,
        paddingLeft: `12px`,
        width: `60%`
    });
    
    newContent.appendChild(halfLeft);
    newContent.appendChild(halfRight);
    newPaper.appendChild(newContent);
    newPaper.appendChild(newHeading);
    getFont_n_fontSize(newPaper);
    
    return newPaper;
}
function createNewPaper10() {
    const newPaper = document.createElement('div');
    newPaper.classList.add('paper','paper_mau10');
    newPaper.style.marginTop = '32px';
    
    const newHeading = document.createElement('div');
    newHeading.classList.add('heading_paper','part_in_paper','part_one');
    Object.assign(newHeading.style, {
        width: `30%`,
        height: `${LAYOUT_CONFIG.paperHeight}px`,
        paddingLeft: `${LAYOUT_CONFIG.padding.left}px`,
        paddingRight: `12px`,
        display : "block"
    });

    const newContent = document.createElement('div');
    newContent.classList.add('content_CV','part_in_paper','part_two');
    Object.assign(newContent.style, {
        width: `calc(100% - 30%)`,
        paddingTop: `${LAYOUT_CONFIG.padding.top}px`
    });

    const halfLeft = document.createElement('section');
    halfLeft.classList.add("half-left")
    const halfRight = document.createElement('section');
    halfRight.classList.add("half-right");
    newContent.appendChild(halfLeft);
    newContent.appendChild(halfRight);

    const newAnhCV = document.createElement('div');
    newAnhCV.classList.add('anh_CV');
    Object.assign(newAnhCV.style, {
        left: `50%`,
        transform: `translateX(-50%)`,
        height: `100%`
    });
    
    newHeading.appendChild(newAnhCV);
    newPaper.appendChild(newHeading);
    newPaper.appendChild(newContent);
    
    getFont_n_fontSize(newPaper);
    
    return newPaper;
}
function createNewPaper11(){
    const newPaper = document.createElement('div');
    newPaper.classList.add('paper','paper_mau11');
    newPaper.style.marginTop = '32px';
    
    const newContent = document.createElement('div');
    newContent.classList.add('content_CV','part_in_paper');
    Object.assign(newContent.style, {
        width: `100%`,
        paddingTop: `${LAYOUT_CONFIG.padding.top}px`
    });

    const newHeading = document.createElement('div');
    newHeading.classList.add('heading_paper','part_in_paper','part_one','heading_paper_mau11');
    const anhcv = document.createElement('section');
    anhcv.classList.add("anh_CV");
    newHeading.appendChild(anhcv);
    newHeading.style.display = "none";


    const halfLeft = document.createElement('section');
    halfLeft.classList.add("half-left")
    const halfRight = document.createElement('section');
    halfRight.classList.add("half-right");
    halfLeft.classList.add('part_one');
    Object.assign(halfLeft.style, {
        width: `40%`,
        height: `${LAYOUT_CONFIG.paperHeight - 64}px`,
        paddingRight: `12px`,
        display : "block",
        left: "0"
    });
    
    halfRight.classList.add('part_two');
    Object.assign(halfRight.style, {
        width: `calc(100% - ${LAYOUT_CONFIG.headerWidth}px)`,
        paddingLeft: `12px`,
        width: `60%`
    });
    
    newContent.appendChild(halfLeft);
    newContent.appendChild(halfRight);
    newPaper.appendChild(newContent);
    newPaper.appendChild(newHeading);
    getFont_n_fontSize(newPaper);
    
    return newPaper;
}
function createNewPaper12(){
    const newPaper = document.createElement('div');
    newPaper.classList.add('paper','paper_mau12');
    newPaper.style.marginTop = '32px';
    
    const newContent = document.createElement('div');
    newContent.classList.add('content_CV','part_in_paper');
    Object.assign(newContent.style, {
        width: `100%`,
        paddingTop: `${LAYOUT_CONFIG.padding.top}px`
    });

    const newHeading = document.createElement('div');
    newHeading.classList.add('heading_paper','part_in_paper','part_one','heading_paper_mau12');
    const anhcv = document.createElement('section');
    anhcv.classList.add("anh_CV");
    newHeading.appendChild(anhcv);
    newHeading.style.display = "none";
    const halfLeft = document.createElement('section');
    halfLeft.classList.add("half-left")
    const halfRight = document.createElement('section');
    halfRight.classList.add("half-right");
    halfLeft.classList.add('part_one');
    Object.assign(halfLeft.style, {
        width: `50%`,
        height: `${LAYOUT_CONFIG.paperHeight - 64}px`,
        paddingRight: `12px`,
        display : "block",
        left: "0"
    });
    
    halfRight.classList.add('part_two');
    Object.assign(halfRight.style, {
        width: `calc(100% - ${LAYOUT_CONFIG.headerWidth}px)`,
        paddingLeft: `12px`,
        width: `50%`
    });
    
    newContent.appendChild(halfLeft);
    newContent.appendChild(halfRight);
    newPaper.appendChild(newContent);
    newPaper.appendChild(newHeading);
    getFont_n_fontSize(newPaper);
    
    return newPaper;
}
// sắp xếp trật tự khi chỉnh sửa các phần trong CV

// 1- đối với những phần là phần đầu tiên qua giấy mới 
function checkLength_if_NewPaper(part,currentPaper){
    if(part.closest(".ct_in_sectionSM") === null){
        currentPaper.querySelector(".half-right").appendChild(part);
        return;
    }
    else if(part.closest(".ct_in_sectionSM").children.length <= 1){
        // nếu part_ct mà chỉ còn 1 ptu con thì cho cả part-ct qua giấy mới luôn
        currentPaper.querySelector(".half-right").appendChild(part.closest(".part_ct"));
    }
    else{
        currentPaper.querySelector(".half-right").appendChild(part);
    }
}
// đối với những phần là phần > 1;
function checkLength_if_notNewPaper(part,currentPaper){
    // xem xét lại khi add newPart 
    if(part.closest(".ct_in_sectionSM") === null){
        currentPaper.nextElementSibling.querySelector(".half-right").insertAdjacentElement("afterbegin",part);
        return;
    }
    else if(part.closest(".ct_in_sectionSM").children.length <= 1){
        currentPaper.nextElementSibling.querySelector(".half-right").insertAdjacentElement("afterbegin",part.closest(".part_ct"));
    }
    else{
        currentPaper.nextElementSibling.querySelector(".half-right").insertAdjacentElement("afterbegin",part);
    }
}

function checkLength_if_NewPaper_2col(part,currentPaper,type){
    if(part.closest(".ct_in_sectionSM") === null){
        currentPaper.querySelector(`.${type}`).appendChild(part);
        return;
    }
    else if(part.closest(".ct_in_sectionSM").children.length <= 1){
        if(type == "half-left"){
            currentPaper.querySelector(".half-left").appendChild(part.closest(".part_ct"));
        }else{
            currentPaper.querySelector(".half-right").appendChild(part.closest(".part_ct"));
        }
    }
    else{
        if(type == "half-left"){
            currentPaper.querySelector(".half-left").appendChild(part);
        }else{
            currentPaper.querySelector(".half-right").appendChild(part);
        }
    }
}

function checkLength_if_notNewPaper_2col(part,currentPaper,type){ 
    // xem xét lại khi add newPart 
    if(part.closest(".ct_in_sectionSM") === null){
        if(type == "half-left"){
            currentPaper.nextElementSibling.querySelector(".half-left").insertAdjacentElement("afterbegin",part);
        }
        else{
            currentPaper.nextElementSibling.querySelector(".half-right").insertAdjacentElement("afterbegin",part);
        }
        return;
    }
    else if(part.closest(".ct_in_sectionSM").children.length <= 1){
        if(type == "half-left"){
            currentPaper.nextElementSibling.querySelector(".half-left").insertAdjacentElement("afterbegin",part.closest(".part_ct"));
        }
        else{
            currentPaper.nextElementSibling.querySelector(".half-right").insertAdjacentElement("afterbegin",part.closest(".part_ct"));
        }
    }
    else{
        if(type == "half-left"){
            currentPaper.nextElementSibling.querySelector(".half-left").insertAdjacentElement("afterbegin",part);
        }
        else{
            currentPaper.nextElementSibling.querySelector(".half-right").insertAdjacentElement("afterbegin",part);
        }
    }
}

// xử lý chia giấy với paper có 2 phần ( 2 cột )

function redistributeContent_2col(part_in_paper){
    //  được dùng để tính toán phần heading của mỗi loại giấy 
    if(part_in_paper){
        console.log("Mẫu 2 cột");
        console.log(part_in_paper);
        let currentPaper = part_in_paper.closest(".paper");
        console.log(currentPaper);
        let currentHeight = 0;
        let paperIndex = 1;
        let type = part_in_paper.getAttribute("class").split(' ')[0];
        console.log(type);
        let loaiCV = getTemplateCV_Now().substring(9);
        console.log("Loai Cv ở hàm redistributeContent_2col :",loaiCV);
        // let qal = part_in_paper.querySelector(".half-right");
        // console.log(qal.querySelectorAll(".item_in_part"));
        const maxHeight = getRemainingHeight(part_in_paper); // tùy thuộc vào độ dài từng mẫu Cv 
        part_in_paper.querySelectorAll(".item_in_part").forEach((part, index) => {
            const partHeight = part.offsetHeight; // độ dài từg phần 
            console.log("Chiều dài phần tử hiện tại : ",partHeight);
            console.log(maxHeight);
            if (currentHeight + partHeight > maxHeight) {
                if(currentPaper.nextElementSibling){
                    checkLength_if_notNewPaper_2col(part,currentPaper,type);
                }
                else{
                    switch(loaiCV){
                        case "1":
                            currentPaper = createNewPaper1();
                            break;
                        case "3":
                            currentPaper = createNewPaper3();
                            break;
                        case "4":
                            currentPaper = createNewPaper4();                              
                            break;
                        case "5":
                            currentPaper = createNewPaper5();                              
                            break;
                        case "6":
                            currentPaper = createNewPaper6();                             
                            break;
                        case "7":
                            currentPaper = createNewPaper7();                              
                            break;
                        case "8":
                            currentPaper = createNewPaper8();                             
                            break;
                        case "9":
                            currentPaper = createNewPaper9();
                            break;
                        case "11":
                            currentPaper = createNewPaper11();
                            break
                        case "10":
                            currentPaper = createNewPaper10();
                            break;
                        case "12":
                            currentPaper = createNewPaper12();                           
                            break;
                        default:
                            console.log("Mẫu Không Hợp Lệ !");
                    }
                    content_left.appendChild(currentPaper);
                    console.log("loại cv :",type," cột");
                    console.log(type);
    
                    checkLength_if_NewPaper_2col(part,currentPaper,type);
                    // part.focus();
                    currentHeight = 0; // gán lại chiều dài htai = 0
                    paperIndex++; // tăng đếm
                }
            }
            currentHeight += partHeight;
        });
        updatePageNumbers();
    }
}

// function redistributeContent_2col(paper){
//     //  được dùng để tính toán phần heading của mỗi loại giấy 
//     if(paper){
//         console.log("Mẫu 2 cột");
//         console.log(part_in_paper);

//         let currentPaper = paper;
//         console.log(currentPaper);
//         let currentHeight = 0;
//         let paperIndex = 1;

//         let type = part_in_paper.getAttribute("class").split(' ')[0];
//         console.log(type);
//         let loaiCV = getTemplateCV_Now().substring(9);
//         console.log("Loai Cv ở hàm redistributeContent_2col :",loaiCV);

//         // let qal = part_in_paper.querySelector(".half-right");
//         // console.log(qal.querySelectorAll(".item_in_part"));
//         const maxHeight = getRemainingHeight(part_in_paper); // tùy thuộc vào độ dài từng mẫu Cv 
//         part_in_paper.querySelectorAll(".item_in_part").forEach((part, index) => {
//             const partHeight = part.offsetHeight; // độ dài từg phần 
//             console.log("Chiều dài phần tử hiện tại : ",partHeight);
//             console.log(maxHeight);
//             if (currentHeight + partHeight > maxHeight) {
//                 if(currentPaper.nextElementSibling){
//                     checkLength_if_notNewPaper_2col(part,currentPaper,type);
//                 }
//                 else{
//                     switch(loaiCV){
//                         case "1":
//                             currentPaper = createNewPaper1();
//                             break;
//                         case "3":
//                             currentPaper = createNewPaper3();
//                             break;
//                         case "4":
//                             currentPaper = createNewPaper4();                              
//                             break;
//                         case "5":
//                             currentPaper = createNewPaper5();                              
//                             break;
//                         case "6":
//                             currentPaper = createNewPaper6();                             
//                             break;
//                         case "7":
//                             currentPaper = createNewPaper7();                              
//                             break;
//                         case "8":
//                             currentPaper = createNewPaper8();                             
//                             break;
//                         case "9":
//                             currentPaper = createNewPaper9();
//                             break;
//                         case "11":
//                             currentPaper = createNewPaper11();
//                             break
//                         case "10":
//                             currentPaper = createNewPaper10();
//                             break;
//                         case "12":
//                             currentPaper = createNewPaper12();                           
//                             break;
//                         default:
//                             console.log("Mẫu Không Hợp Lệ !");
//                     }
//                     content_left.appendChild(currentPaper);
//                     console.log("loại cv :",type," cột");
//                     console.log(type);
    
//                     checkLength_if_NewPaper_2col(part,currentPaper,type);
//                     // part.focus();
//                     currentHeight = 0; // gán lại chiều dài htai = 0
//                     paperIndex++; // tăng đếm
//                 }
//             }
//             currentHeight += partHeight;
//         });
//         updatePageNumbers();
//     }
// }

// xử lý chia giấy mặc định 

function redistributeContent_1col(paper1){;
    let currentPaper = paper1;
    let currentHeight = 0;
    let paperIndex = 1;

    console.log(currentPaper.querySelectorAll(".item_in_part"));
    console.log(getRemainingHeight(currentPaper));

    let loaiCV = getTemplateCV_Now().substring(9);
    // console.log("Loai Cv ở hàm redistributeContent_1col :",loaiCV);
    console.log("đang ở hàm redistributeContent_1col");
    paper1.querySelectorAll(".item_in_part").forEach((part, index) => {
        console.log(part);
        const partHeight = part.offsetHeight; // độ dài từg phần 
        const maxHeight = getRemainingHeight(currentPaper); // lấy ra chiều dài tối đa 
        // kiểm tra nếu chiều dài của phần content trong khổ giấy đã dài quá mức
        console.log("chiều dài hiện Tại :",currentHeight);
        if (currentHeight + partHeight > maxHeight) {
            console.log("Dài Quá Rồi !");

            if(currentPaper.nextElementSibling){
                checkLength_if_notNewPaper(part,currentPaper);
            }
            else{
                if(loaiCV == "0" ){
                    currentPaper = createNewPaper();
                }
                else if(loaiCV == "2"){
                    currentPaper = createNewPaper2();
                }
                else{
                    console.log("Mẫu không tồn tại");
                }
                content_left.appendChild(currentPaper);
                checkLength_if_NewPaper(part,currentPaper);
                part.focus();
                currentHeight = 0; // gán lại chiều dài htai = 0
                paperIndex++; // tăng đếm
            }
        }
        currentHeight += partHeight;
    });
    updatePageNumbers();
}

function fixbug0103(){
    let partCTs = content_left.querySelectorAll(".part_ct:not(.information):not(.title_HD)");
    console.log(partCTs);
    partCTs.forEach(ele=>{
        if(ele.querySelector(".title") == null || ele.querySelector(".title") == undefined){
            console.error("----------------");  
            let pre = ele.previousElementSibling;
            let next = ele.nextElementSibling;
            if(pre){
                while(!pre.classList.contains("part_ct")){
                    if(pre.getAttribute("fatherpart") == ele.getAttribute("class").split(" ")[0]){
                        ele.insertAdjacentElement("beforeend",pre);
                    }
                    if(pre.classList.contains("title")){
                        ele.insertAdjacentElement("afterbegin",pre);
                    }
                    pre = pre.previousElementSibling;
                }
            }
            if(next){
                console.log("<><><> 1");
                console.log(next);
                while(!next.classList.contains("part_ct")){
                    console.log("<><><> 2");
                    
                    if(next.getAttribute("fatherpart") == ele.getAttribute("class").split(" ")[0]){
                        console.log("<><><> 3");
                        ele.insertAdjacentElement("beforeend",next);
                    }
                    else if(next.classList.contains("title")){
                        console.log("<><><> 4");
                        ele.insertAdjacentElement("afterbegin",next);
                    }
                    else{
                        break;
                    }
                    next = ele.nextElementSibling;
                }
            }
        }
    })
}
//xóa modal
function redistributeContent_when_Addele_2col(part_in_paper) {
    let papers = Array.from(content_left.querySelectorAll('.paper'));  
    let type;
    if(part_in_paper.closest(".phan_phu")){
        return;
    }
    console.log(part_in_paper);
    type = part_in_paper.getAttribute("class").split(' ')[0];   
    console.log("type o hàm redistributeContent_2col : ",type);
    console.log(type);
    let loaiCV = getTemplateCV_Now().substring(9);
    console.log("Loai Cv ở hàm redistributeContent_when_Addele_2col :",loaiCV);

    papers.forEach(paper=>{
        let currentHeight = 0;
        let currentPaper = paper;
        let itemsInPart;
            itemsInPart = Array.from(paper.querySelector(`.${type}`).querySelectorAll(".item_in_part"));
        let excessParts = [];
        const maxHeight = getRemainingHeight(currentPaper) // lấy ra chiều dài tối đa 
        console.log("chiều dài tối đa ở giấy hiện tại:",maxHeight);
        console.log(itemsInPart);
        
        for(let i = 0 ; i < itemsInPart.length ; i++){
            const partHeight = itemsInPart[i].offsetHeight; 
                if (currentHeight + partHeight >= maxHeight) {
                    for(let j = i ; j < itemsInPart.length ; j++){
                        console.log(itemsInPart[j]);
                        if(itemsInPart[j].closest(".ct_in_sectionSM") === null ){ // nếu như vậy thì thêm hết chúng vào phần tử part_ct cuối cùng ở giấy trên 
                            if(itemsInPart[j].classList.contains("title")){
                                excessParts.push(itemsInPart[j].closest(".part_ct"));
                            }
                            else{
                                excessParts.push(itemsInPart[j]);
                            }
                        }
                        else if(itemsInPart[j].closest(".ct_in_sectionSM").children.length <= 1 ){
                            excessParts.push(itemsInPart[j].closest(".part_ct"));
                        }
                        else{
                            excessParts.push(itemsInPart[j]);
                        }
                    }
                    console.log("Phần tử bị thừa ra",excessParts);
                    if(currentPaper.nextElementSibling){
                        excessParts.forEach(part=>{
                            checkLength_if_notNewPaper_2col(part,currentPaper,type);
                        })
                    }
                    else{
                        switch(loaiCV) {
                            case "1":
                                currentPaper = createNewPaper1();
                                break;
                            case "3":
                                currentPaper = createNewPaper3();
                                break;
                            case "4":
                                currentPaper = createNewPaper4();                              
                                break;
                            case "5":
                                currentPaper = createNewPaper5();                              
                                break;
                            case "6":
                                currentPaper = createNewPaper6();                             
                                break;
                            case "7":
                                currentPaper = createNewPaper7();                              
                                break;
                            case "8":
                                currentPaper = createNewPaper8();                             
                                break;
                            case "9":
                                currentPaper = createNewPaper9();
                                break;
                            case "11":
                                currentPaper = createNewPaper11();
                                break
                            case "10":
                                currentPaper = createNewPaper10();
                                break;
                            case "12":
                                currentPaper = createNewPaper12();                           
                                break;
                            default:
                                console.log("Mẫu Không Hợp Lệ ở Mẫu 2 cột!");
                        }
                        content_left.appendChild(currentPaper);
                        excessParts.forEach(part=>{
                            checkLength_if_NewPaper_2col(part,currentPaper,type);
                        })
                    }
                    itemsInPart[i].focus();
                    break;
                }
                currentHeight += partHeight;
        }
        updatePageNumbers();
    })      
}

// xóa modal
function redistributeContent_when_Addele() {
    let papers = Array.from(content_left.querySelectorAll('.paper'));
    // Bắt đầu từ trang hiện tại
    let loaiCV = getTemplateCV_Now().substring(9);
    console.log("Loai Cv ở hàm redistributeContent_when_Addele :",loaiCV);
    console.log("đang ở hàm redistributeContent_when_Addele");
    papers.forEach(paper=>{
        let currentPaper = paper;
        let currentHeight = 0;
        let itemsInPart = Array.from(currentPaper.querySelectorAll(".item_in_part"));
        
        let excessParts = [];
        for(let i = 0 ; i < itemsInPart.length ; i++){
            console.log(itemsInPart[i]);
            const partHeight = itemsInPart[i].offsetHeight; 
            const maxHeight = getRemainingHeight(currentPaper); // lấy ra chiều dài tối đa 
            console.log("Chiều Dài Tối Đa :",maxHeight);
            currentHeight += partHeight;
            console.log(currentHeight);
            if (currentHeight > maxHeight) {
                for(let j = i ; j < itemsInPart.length ; j++){
                    if(itemsInPart[j].closest(".ct_in_sectionSM") === null ){ // nếu như vậy thì thêm hết chúng vào phần tử part_ct cuối cùng ở giấy trên 
                        if(itemsInPart[j].classList.contains("title")){
                            excessParts.push(itemsInPart[j].closest(".part_ct"));
                        }
                        else{
                            excessParts.push(itemsInPart[j]);
                        }
                    }
                    else if(itemsInPart[j].closest(".ct_in_sectionSM").children.length <= 1 ){
                        excessParts.push(itemsInPart[j].closest(".part_ct"));
                    }
                    else{
                        excessParts.push(itemsInPart[j]);
                    }
                }
                console.log(excessParts);
                if(currentPaper.nextElementSibling){
                    excessParts.forEach(part=>{
                        checkLength_if_notNewPaper(part,currentPaper);
                    })
                }
                else{
                    if(loaiCV == "0" ){
                        currentPaper = createNewPaper();
                    }
                    else if(loaiCV == "2"){
                        currentPaper = createNewPaper2();
                    }
                    else{
                        console.log("Mẫu không tồn tại ở mẫu 1 cột");
                    }
                    content_left.appendChild(currentPaper);
                    excessParts.forEach(part=>{
                        checkLength_if_NewPaper(part,currentPaper);
                    })
                    itemsInPart[i].focus();
                }
                break;
            }
        }
        updatePageNumbers();
    })  
}
// tự động theo dõi thay đổi trong DOM khi chèn thêm phần tử

function updatePageNumbers() {
    const papers = document.querySelectorAll('.paper');
    // tông số giấy 
    const totalPages = papers.length;

    papers.forEach((paper, index) => {
        // lấy ra đánh số của mỗi trang 
        let pageNumber = paper.querySelector('.quantity_page');
        if (!pageNumber) {
            pageNumber = document.createElement('div');
            pageNumber.classList.add('quantity_page');
            paper.appendChild(pageNumber);
        }
        pageNumber.textContent = `Trang ${index + 1}/${totalPages}`;
    });
}

// ----------------------------------------------------- logic phân chia nội dung và thêm giấy 

// Hàm xử lý lấp đầy chỗ trống khi xóa phần tử
function check_4_fn_Fill_processing(ele_remove){
    if(ele_remove.closest(".half-right")){
        console.log("half-right");
        return "half-right";
    }
    else{
        console.log("half-left");
        return "half-left";
    }
}

function fixbug0603(haft){
    let List_paper = document.querySelectorAll(".paper");
    part_have_ele_deleted = haft;
    List_paper.forEach(paper=>{
        // let currentpaper = ele_remove.closest(".paper");
        let currentpaper = paper;
        let maxH = getRemainingHeight(currentpaper);
        let currentHei = 0;
        let halfLeft = currentpaper.querySelector(".half-left");
        let halfRight = currentpaper.querySelector(".half-right");

        if(part_have_ele_deleted == "half-right"){           
            let remains_part = halfRight.querySelectorAll(".item_in_part");
            console.log("remains_part : ",remains_part)
            remains_part.forEach(ele=>{
                currentHei += ele.offsetHeight;
            })
            console.log("currentHei : ",currentHei)

            if(currentpaper.nextElementSibling){
                let partCT = currentpaper.nextElementSibling.querySelector(".half-right").querySelector("section");
                console.log(partCT); 

                while(maxH > currentHei){                  
                    if(!partCT){
                        break;
                    }
                    console.log("Lọt vào Đây");
                    halfRight.insertAdjacentElement("beforeend",partCT);
                    console.log("---------------------");
                    console.log("partCT có nằm trong halfRight không?", halfRight.contains(partCT));

                    console.log("partCT hiện tại trong while",partCT);
                    currentHei += partCT.offsetHeight;
                    console.log("currentHei sau khi thêm phần tử",currentHei,maxH);
                    if(getTemplateCV_Now() == "paper_mau0" || getTemplateCV_Now() == "paper_mau2" || getTemplateCV_Now() == "paper_mau3" || getTemplateCV_Now() == "paper_mau10"){
                        redistributeContent_when_Addele();
                    }
                    else{
                        redistributeContent_when_Addele_2col(halfRight);
                    }
                    partCT = currentpaper.nextElementSibling.querySelector(".half-right").querySelector("section");
                }
                if(partCT == null){
                    currentpaper.nextElementSibling.remove();
                } 
            }
        }
        else{
            let remains_part = halfLeft.querySelectorAll(".item_in_part");
            console.log(remains_part)
            remains_part.forEach(ele=>{
                currentHei += ele.offsetHeight;
            })
            console.log(currentHei);
            if(currentpaper.nextElementSibling){
                let partCT = currentpaper.nextElementSibling.querySelector(".half-left").querySelector("section");
                console.log(partCT);   
                console.log(maxH); 
                
                while(maxH > currentHei){
                    console.log(currentHei);
                    if(!partCT){
                        break;
                    }
                    
                    halfLeft.insertAdjacentElement("beforeend",partCT);
                    currentHei += partCT.offsetHeight;
                    if(getTemplateCV_Now() == "paper_mau0" || getTemplateCV_Now() == "paper_mau2" || getTemplateCV_Now() == "paper_mau3" || getTemplateCV_Now() == "paper_mau10"){
                        redistributeContent_when_Addele();
                    }
                    else{
                        redistributeContent_when_Addele_2col(halfLeft);
                    }
                    partCT = currentpaper.nextElementSibling.querySelector(".half-left").querySelector("section");
                }
            }
        }
        
    })
}
function Fill_processing(ele_remove){
    let List_paper = document.querySelectorAll(".paper");
    let part_have_ele_deleted = check_4_fn_Fill_processing(ele_remove);
    let ktra;
    if(ele_remove.closest(".ct_in_sectionSM")){
        ktra = ele_remove.closest(".ct_in_sectionSM").querySelectorAll("section[fatherpart]");
        if(ktra.length < 2){
            console.log("Vào đây");
            ele_remove.closest(".part_ct").remove();
        }
        else{
            ele_remove.remove();
        }
    }
    else{
        ele_remove.remove();
    }
    check_4_fn_Fill_processing(ele_remove);
    List_paper.forEach(paper=>{
        // let currentpaper = ele_remove.closest(".paper");
        let currentpaper = paper;
        let maxH = getRemainingHeight(currentpaper);
        let currentHei = 0;
        let halfLeft = currentpaper.querySelector(".half-left");
        let halfRight = currentpaper.querySelector(".half-right");

        if(part_have_ele_deleted == "half-right"){           
            let remains_part = halfRight.querySelectorAll(".item_in_part");
            console.log("remains_part : ",remains_part)
            remains_part.forEach(ele=>{
                currentHei += ele.offsetHeight;
            })
            console.log("currentHei : ",currentHei)

            if(currentpaper.nextElementSibling){
                let partCT = currentpaper.nextElementSibling.querySelector(".half-right").querySelector("section");
                console.log(partCT); 

                while(maxH > currentHei){                  
                    if(!partCT){
                        break;
                    }
                    console.log("Lọt vào Đây");
                    halfRight.insertAdjacentElement("beforeend",partCT);
                    console.log("---------------------");
                    console.log("partCT có nằm trong halfRight không?", halfRight.contains(partCT));

                    console.log("partCT hiện tại trong while",partCT);
                    currentHei += partCT.offsetHeight;
                    console.log("currentHei sau khi thêm phần tử",currentHei,maxH);
                    if(getTemplateCV_Now() == "paper_mau0" || getTemplateCV_Now() == "paper_mau2" || getTemplateCV_Now() == "paper_mau3" || getTemplateCV_Now() == "paper_mau10"){
                        redistributeContent_when_Addele();
                    }
                    else{
                        redistributeContent_when_Addele_2col(halfRight);
                    }
                    partCT = currentpaper.nextElementSibling.querySelector(".half-right").querySelector("section");
                }
                if(partCT == null){
                    currentpaper.nextElementSibling.remove();
                } 
            }
        }
        else{
            let remains_part = halfLeft.querySelectorAll(".item_in_part");
            console.log(remains_part)
            remains_part.forEach(ele=>{
                currentHei += ele.offsetHeight;
            })
            console.log(currentHei);
            if(currentpaper.nextElementSibling){
                let partCT = currentpaper.nextElementSibling.querySelector(".half-left").querySelector("section");
                console.log(partCT);   
                console.log(maxH); 
                
                while(maxH > currentHei){
                    console.log(currentHei);
                    if(!partCT){
                        break;
                    }
                    
                    halfLeft.insertAdjacentElement("beforeend",partCT);
                    currentHei += partCT.offsetHeight;
                    if(getTemplateCV_Now() == "paper_mau0" || getTemplateCV_Now() == "paper_mau2" || getTemplateCV_Now() == "paper_mau3" || getTemplateCV_Now() == "paper_mau10"){
                        redistributeContent_when_Addele();
                    }
                    else{
                        redistributeContent_when_Addele_2col(halfLeft);
                    }
                    partCT = currentpaper.nextElementSibling.querySelector(".half-left").querySelector("section");
                }
            }
        }
        
    })
}
function contentEditable(ele){
    ele.setAttribute('contentEditable', 'true');
    ele.focus();
}
function antiEnter(ele){
    let childElements = ele.children;
    Array.from(childElements).forEach(child => {
        if (child.querySelector("br")) {
            child.remove();
        }
    });
}

const observer2 = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
    //   if (mutation.type === 'childList') {
        // Cập nhật lại NodeList khi có phần tử mới
        textElements = document.querySelectorAll('.possible_Part');
        // console.log(textElements);
        textElements.forEach(function(ele){
            ele.onclick = function(e){
                if(ele.closest(`section[fatherpart="overview"]`)){
                    contentEditable(ele);
                }
                else contentEditable(e.target);
                // tiến hành xóa hết trc khi chuyển sang cái mới 
                instruct.innerHTML = "";
                console.log(ele.closest(".part_ct"));
                if(ele.closest(".part_ct")){
                    if(ele.closest(".part_ct").getAttribute("class")){
                        suggest.forEach((e)=>{
                            if(ele.closest(".part_ct").getAttribute("class").split(" ")[0] == e.heading.title ){
                                suggest_CV(e);
                            }
                        })
                        let list_box_progress = document.querySelectorAll(".box_progress");
                        list_box_progress.forEach(elem=>{
                        elem.onclick = (e)=>{
                            elem.classList.toggle("border_blue");
                            }
                        })
                    }
                }
            }
            ele.onblur = function(e){
                antiEnter(ele);
            }
        })      
    //   }
    });
});
observer2.observe(content_left, { childList: true, subtree: true });

textElements.forEach(function(ele){
    ele.onclick = function(e){
        contentEditable(e.target);
    }
    ele.onblur = function(e){
        antiEnter(ele);
    }
})   

//  ------------------------------------------------   thêm thanh công cụ và thêm xóa , chèn , di chuyển  
// sửa lỗi chia giấy khi chèn them part_ct mới vào 

let activeElement = null;
let activeToolbars = [];

// đổi vị trí 2 phần tử 
function swapElements(elementA, elementB) {
    const placeholder = document.createElement('div');
    elementA.parentNode.insertBefore(placeholder, elementA);
    elementA.replaceWith(elementB);
    placeholder.replaceWith(elementA);
}
function swapElements1(elementA, elementB) {
    const placeholder = document.createElement('div');
    elementA.parentNode.insertBefore(placeholder, elementA);
    elementB.replaceWith(elementA);
    placeholder.replaceWith(elementB);
}
function removeToolbars(element) {
    const toolbars = element.querySelectorAll('.edit_ContentCV');
    toolbars.forEach(toolbar => toolbar.remove());
    element.style.border = 'none';
}

// thẻ div chứa các thẻ phần CV để thêm mới 
let select_list_item = document.querySelectorAll(".list_partItem")

// bảng chứa các phần khác của CV khi muốn thêm 
let addNewItem = document.querySelector(".addNewItem");

let partSkill = document.createElement("section");
let partProject = document.createElement("section");
let partAwards = document.createElement("section");
let partworkGoals = document.createElement("section");
let partCertificate = document.createElement("section");
let partLanguage = document.createElement("section");
let partAnother = document.createElement("section");
let partOverview = document.createElement("section");
let partworkExp = document.createElement("section");
let partEducation = document.createElement("section");

// 
partSkill.classList.add("skill");
partSkill.classList.add("part_ct");
partSkill.classList.add("paragraph");
//
partProject.classList.add("project");
partProject.classList.add("part_ct");
partProject.classList.add("paragraph");
//
partAwards.classList.add("awards");
partAwards.classList.add("part_ct");
partAwards.classList.add("paragraph");
//
partworkGoals.classList.add("goals");
partworkGoals.classList.add("part_ct");
partworkGoals.classList.add("paragraph");
//
partCertificate.classList.add("certificate");
partCertificate.classList.add("part_ct");
partCertificate.classList.add("paragraph");
//
partLanguage.classList.add("language");
partLanguage.classList.add("part_ct");
partLanguage.classList.add("paragraph");
//
partAnother.classList.add("another");
partAnother.classList.add("part_ct");
partAnother.classList.add("paragraph");
//
partOverview.classList.add("overview");
partOverview.classList.add("part_ct");
partOverview.classList.add("paragraph");
//
partworkExp.classList.add("workexperience");
partworkExp.classList.add("part_ct");
partworkExp.classList.add("paragraph");
//
partEducation.classList.add("education");
partEducation.classList.add("part_ct");
partEducation.classList.add("paragraph");


//[bug] Làm thêm các part_ct khác để thêm vào CV
partSkill.innerHTML = `<section class="bold title possible_Part item_in_part">
                            <i class="fa-solid fa-graduation-cap"></i>
                            <p class="label_partCT">
                                Skill
                            </p>
                        </section>

                        <section class="list_skill ct_in_sectionSM">
                            <section team="" fatherpart="skill" class="content_in_CV paragraph item_in_part">
                                <section class="half_left_of_content_item possible_Part">
                                    <p class="timeline type_2">Main</p>
                                </section>
                                <section class="half_right_of_content_item project_ofPart">
                                    <ul class="content_item type_2 possible_Part"> 
                                        <li>Programme outsourcing projects</li>
                                        <li>Programme outsourcing projects</li>
                                        <li>Programme outsourcing projects</li>
                                    </ul>
                                </section>
                            </section>
                        </section>`;
partProject.innerHTML = `<section class="bold item_in_part possible_Part title">
                            <i class="fa-solid fa-graduation-cap"></i>
                            <p class="label_partCT">
                                Projects
                            </p>
                        </section>
                        <section class="list_project ct_in_sectionSM">
                            <section team="" fatherpart="project" class="projects content_in_CV paragraph item_in_part">
                                <section class="name_project">
                                    <b class="type_3 possible_Part">Tên Dự Án Của Bạn</b>
                                    <p class="type_3 possible_Part">Thời Gian</p>
                                </section>

                                <section>
                                    <table>
                                        <tr class="content_in_CV">
                                            <td class="half_left_of_content_item">
                                                <div class="client_project_lable type_3 possible_Part">
                                                    <b > Khách Hàng</b>
        
                                                </div>
                                            </td>
                                            <td class="half_right_of_content_item">
                                                <div class="client_project type_3 possible_Part">
                                                    <p > Nội Dung </p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="content_in_CV">
                                            <td class="half_left_of_content_item">
                                                <div class="descriptions_project_lable type_3 possible_Part">
                                                    <b > Mô Tả</b>
                                                </div>
                                            </td>
                                            <td class="half_right_of_content_item">
                                                <div class="descriptions_project type_3 possible_Part">
                                                    <p > Nội Dung </p>
        
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="content_in_CV">
                                            <td class="half_left_of_content_item">
                                                <div class="number_of_members_project_lable type_3 possible_Part">
                                                    <b> Team Size</b>
                                                </div>
                                            </td>
                                            <td class="half_right_of_content_item">
                                                <div class="number_of_members_project type_3 possible_Part">
                                                    <p > 3 </p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="content_in_CV">
                                            <td class="half_left_of_content_item">
                                                 <div class="position_project_lable type_3 possible_Part">
                                                    <b > Vị Trí</b>
            
                                                 </div>
                                            </td>
                                            <td class="half_right_of_content_item">
                                                <div class="position_project type_3 possible_Part">
                                                    <p > Nội Dung </p>
        
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="content_in_CV">
                                            <td class="half_left_of_content_item">
                                                 <div class="responsibilities_project_lable type_3 possible_Part">
                                                    <b > Vai Trò</b>
            
                                                 </div>
                                            </td>
                                            <td class="half_right_of_content_item">
                                                <div class="responsibilities_project type_3 possible_Part">
                                                    <p > Nội Dung </p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="content_in_CV">
                                            <td class="half_left_of_content_item">
                                                <div class="technology_in_use_project_lable type_3 possible_Part">
                                                    <b > Công Nghệ Sử Dụng</b> 
                                                </div>
                                            </td>
                                            <td class="half_right_of_content_item">
                                                <div class="technology_in_use_project type_3 possible_Part">
                                                    <p > Nội Dung </p>     
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </section>    
                            </section>                    
                        </section>`
partAwards.innerHTML = `<section class="bold item_in_part possible_Part title">
                            <i class="fa-solid fa-graduation-cap"></i>
                            <p class="label_partCT">
                                Awards
                            </p>
                        </section>
                        
                        <section class="ct_in_sectionSM">
                            <section team="" fatherpart="awards" class="content_in_CV paragraph item_in_part"> 
                                <section class="half_left_of_content_item bold possible_Part">
                                    <p class="timeline type_2">01/2018 – Present</p>
                                </section>
                                <section class="half_right_of_content_item my_award projectcv">
                                    <section class="bold possible_Part title_item">
                                        <p class="type_2">F8 TECHNOLOGY EDUCATION.,JSC</p>
                                    </section>
                                    <section class="content_item">
                                        <p class="type_2 possible_Part">
                                            Poly creation contest: http://goo.gl/BVP5kE
                                        </p>
                                    </section>
                                </section>
                            </section>
                        </section>
                        `
partworkGoals.innerHTML = `<section class="bold item_in_part possible_Part title">
                            <i class="fa-solid fa-graduation-cap"></i>
                            <p class="label_partCT">
                                Mục Tiêu Công Việc
                            </p>
                        </section>
                        <section class="ct_in_sectionSM">
                            <section team="" fatherpart="goals" class="content_in_CV paragraph item_in_part"> 
                                <section class="half_left_of_content_item bold">
                                    <p class="timeline type_2 possible_Part">Ngắn Hạn</p>
                                </section>
                                <section class="half_right_of_content_item my_award project">
                                    <section class="content_item">
                                        <p class="type_2 possible_Part">
                                            Poly creation contest: http://goo.gl/BVP5kE
                                        </p>
                                    </section>
                                </section>
                            </section>
                        </section>`
partCertificate.innerHTML = `<section class="bold item_in_part possible_Part title">
                            <i class="fa-solid fa-graduation-cap"></i>
                            <p class="label_partCT">
                                Chứng Chỉ
                            </p>
                        </section>
                        <section class="ct_in_sectionSM">
                            <section team="" fatherpart="certificate" class="content_in_CV paragraph item_in_part"> 
                                <section class="half_left_of_content_item bold">
                                    <p class="timeline type_2 possible_Part">Thời Gian 1</p>
                                </section>
                                <section class="half_right_of_content_item my_award project">
                                    <section class="content_item">
                                        <p class="type_2 possible_Part">
                                            Poly creation contest: http://goo.gl/BVP5kE
                                        </p>
                                    </section>
                                </section>
                            </section>
                        </section>`
partLanguage.innerHTML = `<section class="bold item_in_part possible_Part title">
                            <i class="fa-solid fa-graduation-cap"></i>
                            <p class="label_partCT">
                                Ngôn Ngữ
                            </p>
                        </section>
                        <section class="ct_in_sectionSM">
                            <section team="" fatherpart="language" class="content_in_CV paragraph item_in_part"> 
                                <section class="half_left_of_content_item bold">
                                    <p class="timeline type_2 possible_Part">Tiếng Nhật</p>
                                </section>
                                <section class="half_right_of_content_item my_award project">
                                    <section class="type_2 possible_Part title_item">
                                        <b class="" > N3</b>
                                    </section>
                                    <section class="content_item">
                                        <p class="type_2 possible_Part">
                                            Poly creation contest : link...
                                        </p>
                                    </section>
                                </section>
                            </section>
                        </section>`
partAnother.innerHTML = `<section class="bold item_in_part possible_Part title">
                            <i class="fa-solid fa-graduation-cap"></i>
                            <p class="label_partCT">
                                Khác
                            </p>
                        </section>
                        <section class="ct_in_sectionSM">
                            <section team="" fatherpart="another" class="content_in_CV paragraph item_in_part"> 
                                <section class="half_left_of_content_item bold">
                                    <p class="timeline type_2 possible_Part">Ngắn Hạn</p>
                                </section>
                                <section class="half_right_of_content_item my_award project">
                                    <section class="type_2 possible_Part title_item">
                                        <b class="" > N3</b>
                                    </section>
                                    <section class="content_item">
                                        <p class="type_2 possible_Part">
                                            Poly creation contest: http://goo.gl/BVP5kE
                                        </p>
                                    </section>
                                </section>
                            </section>
                        </section>`
partOverview.innerHTML = `<section class="bold title possible_Part item_in_part">
                                <i class="fa-solid fa-eye"></i>
                                <p class="label_partCT">
                                    Overview
                                </p>
                            </section>
    
                            <section class="ct_in_sectionSM">
                                <section team="" fatherpart="overview" class="ct_overview type_1 paragraph possible_Part item_in_part">
                                    <p>
                                        - Over 2 years of experience in programming with good communication and quick learning skills 
                                    </p>
                                    <p>
                                        - Strengths: Front-end technology and Back-end web application development
                                    </p>
                                    <p>
                                        - Strengths: Front-end technology and Back-end web application development
                                    </p>
                                    <p>
                                        - Strengths: Front-end technology and Back-end web application development
                                    </p>
                                    <p>
                                        - Strengths: Front-end technology and Back-end web application development
                                    </p>
                                    <p>
                                        - Strengths: Front-end technology and Back-end web application development
                                    </p>
                                    <p>
                                        - Strengths: Front-end technology and Back-end web application development
                                    </p>
                                </section>
                            </section>`;
partworkExp.innerHTML = `<section class="bold title possible_Part item_in_part">
                                <i class="fa-solid fa-suitcase"></i>
                                <p class="label_partCT">
                                    Work Experience
                                </p>
                            </section>
    
                            <section class="time_work ct_in_sectionSM">
    
                                <section team="" fatherpart="workexperience" class="content_in_CV paragraph item_in_part"> 
                                    <section class="half_left_of_content_item bold possible_Part">
                                        <p class="timeline type_2">01/2018 – Present</p>
                                    </section>
                                    <section class="half_right_of_content_item project_ofPart">
                                        <section class="bold">
                                            <p class="title_item type_2 possible_Part">F8 TECHNOLOGY EDUCATION.,JSC</p>
                                        </section>
                                        <p class="description type_2 possible_Part">Full-stack Developer</p>
                                        <ul class="content_item type_2 possible_Part"> 
                                            <li>Programme outsourcing projects</li>
                                            <li>Programme outsourcing projects</li>
                                            <li>Programme outsourcing projects</li>
                                        </ul>
                                    </section>
                                </section>  
    
                            </section>`;
partEducation.innerHTML = `<section class="bold title possible_Part item_in_part">
                                <i class="fa-solid fa-graduation-cap"></i>
                                <p class="label_partCT">
                                    Education
                                </p>
                            </section>
    
                            <section class="content_edu ct_in_sectionSM">
                                <section team="" fatherpart="education" class="content_in_CV paragraph item_in_part">
                                    <section class="half_left_of_content_item bold possible_Part">
                                        <p class="timeline type_2">2011/10 – 2014/09</p>
                                    </section>
                                    <section class=" project_ofPart study_place">
                                        <section class="bold possible_Part">
                                            <p class="title_item type_2">FBU </p>
                                        </section>
                                        <ul class="content_item type_2 possible_Part"> 
                                            <li>Major - Website, Mobile Programming</li>
                                            <li>Level - Good</li>
                                            <li>Level - Good</li>
                                        </ul>
                                    </section>
                                </section> 
                            </section>`;
let chanvcd = [];
let list_addNewItem = addNewItem.querySelectorAll(".list_partItem>div");
function check_part_avai(ele,parts_exists){
    for (let e of parts_exists) {
        if (ele.getAttribute("class").split(" ")[2] == e) {
            return false;
        }
    }
    return true;
}
function handlewhenaddPart_ct(part){
    let paperc = part.closest(".paper");
    let nodechild
    console.log(part.getAttribute("class").split(" ")[0]);
    if(paperc.nextElementSibling){
        nodechild = paperc.nextElementSibling.querySelectorAll(`section[fatherpart="${part.getAttribute("class").split(" ")[0]}"]`);
        console.log(nodechild);
        if(nodechild.length > 0){
            return nodechild[nodechild.length - 1];
        }
    }
    else{
        let chinhno;
        nodechild = paperc.querySelectorAll(`section[fatherpart="${part.getAttribute("class").split(" ")[0]}"]`);
        console.log(nodechild);
        if(nodechild.length > 0){
            nodechild.forEach((ele,i)=>{
                if(ele.closest(`.${part.getAttribute("class").split(" ")[0]}`) == undefined || ele.closest(`.${part.getAttribute("class").split(" ")[0]}`) == null){
                    chinhno = ele;
                }
            })
            return chinhno;
        }
    }                        
}

function editContent(ele,mauCV) {
    if(!ele){
        return;
    }
    if (activeElement === ele) return;  
    if (activeElement) {
        removeToolbars(activeElement);
    }

    let add_n_move = document.createElement('div');
    let removeEle = document.createElement('div');
    // let repairFont = document.createElement('div');
    
    add_n_move.setAttribute("class", "edit_ContentCV add_Part");
    removeEle.setAttribute("class", 'edit_ContentCV remove_Part');
    // repairFont.setAttribute("class", 'edit_ContentCV repair_Font hidden');

    add_n_move.innerHTML = `<i class="fa-solid fa-plus add_up"></i> 
    <div><i class="fa-solid fa-angle-up remove_up"></i> <i class="fa-solid fa-angle-down remove_down"></i></div> 
    <i class="fa-solid fa-plus add_down"></i>`;

    removeEle.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    
    ele.style.position = 'relative';
    ele.style.border = "1px solid black";
    ele.style.borderRadius = "8px";
    ele.appendChild(add_n_move);
    ele.appendChild(removeEle);
    // ele.appendChild(repairFont);

    // Update active element
    activeElement = ele;
    activeToolbars = [add_n_move, removeEle];

    ele.addEventListener("click", function(event) {
        if (event.target.classList.contains("move_up")) {
            editContent(ele); 
        } else if (event.target.classList.contains("move_down")) {
          console.log("remove_down clicked");
        }
    });

    // event in add_n_move 
    let moveUp = document.querySelector(".remove_up");
    let moveDown = document.querySelector(".remove_down");
    let addUp = document.querySelector(".add_up");
    let addDown = document.querySelector(".add_down");

    // để dành để học jquery mới làm đc 
    let btnCancel = document.querySelector(".fa-ban");
    let btnBold = document.querySelector(".fa-bold");
    let btnItalic = document.querySelector(".fa-italic");
    let btnUDline = document.querySelector(".fa-underline");
    let btnListStyle = document.querySelector(".fa-list-ul");

    moveUp.addEventListener("click", function() {
        if(getTemplateCV_Now() == "paper_mau11" || getTemplateCV_Now() == "paper_mau12" || getTemplateCV_Now() == "paper_mau3"){
            if(ele.classList.contains("information")){
                alert("❌ Không Thể Di Chuyển Phần Này");
                return;
            }
        }
        if(ele.classList.contains("part_ct")){
            let elekhac;
            let a1 = combine_the_parts(ele);
            if(ele.previousElementSibling === null){
                elekhac = ele.closest(".paper").previousElementSibling.querySelectorAll(".part_ct");
                swapElements1(a1,elekhac[elekhac.length - 1]);
                if(getTemplateCV_Now() == "paper_mau0" || getTemplateCV_Now() == "paper_mau2"){
                    redistributeContent_when_Addele();
                }
                else{
                    if(ele.closest(".half-left")){
                        redistributeContent_when_Addele_2col(ele.closest(".half-left"));
                    }
                    else{
                        redistributeContent_when_Addele_2col(ele.closest(".half-right"));
                    }
                }
            }
            else{
                elekhac = ele.previousElementSibling;
                if(!ele.previousElementSibling.classList.contains("information")){
                    swapElements1(a1,elekhac);
                }
                if(getTemplateCV_Now() == "paper_mau0" || getTemplateCV_Now() == "paper_mau2"){
                    redistributeContent_when_Addele();
                }
                else{
                    if(ele.closest(".half-left")){
                        redistributeContent_when_Addele_2col(ele.closest(".half-left"));
                    }
                    else{
                        redistributeContent_when_Addele_2col(ele.closest(".half-right"));
                    }
                }
                // làm tương tự với movedown
            }
        }
        else{
            if(ele.previousElementSibling){
                    if(checkFatherPart(ele,ele.previousElementSibling)){
                        swapElements(ele,ele.previousElementSibling);
                    }
                    else{
                        console.log("Noooo");
                    }
            }
        }
    });
    //ele.closest(".paper").nextElementSibling
    moveDown.addEventListener("click", function() {
        if(getTemplateCV_Now() == "paper_mau11" || getTemplateCV_Now() == "paper_mau12" || getTemplateCV_Now() == "paper_mau3"){
            if(ele.classList.contains("information")){
                alert("❌ Không Thể Di Chuyển Phần Này");
                return;
            }
        }
        if(ele.classList.contains("part_ct")){
            let elekhac;
            console.log(ele.nextElementSibling);
            let a1 = combine_the_parts(ele);
            if(ele.nextElementSibling === null){
                if(ele.closest(".paper").nextElementSibling){
                    elekhac = ele.closest(".paper").nextElementSibling.querySelectorAll(".part_ct");
                    swapElements1(a1,elekhac[elekhac.length - 1]);
                    if(getTemplateCV_Now() == "paper_mau0" || getTemplateCV_Now() == "paper_mau2"){
                        redistributeContent_when_Addele();
                    }
                    else{
                        if(ele.closest(".half-left")){
                            redistributeContent_when_Addele_2col(ele.closest(".half-left"));
                        }
                        else{
                            redistributeContent_when_Addele_2col(ele.closest(".half-right"));
                        }
                    }
                }
            }
            else{
                elekhac = ele.nextElementSibling;
                if(!ele.nextElementSibling.classList.contains("information")){
                    swapElements1(a1,elekhac);
                }
                if(getTemplateCV_Now() == "paper_mau0" || getTemplateCV_Now() == "paper_mau2"){
                    redistributeContent_when_Addele();
                }
                else{
                    if(ele.closest(".half-left")){
                        redistributeContent_when_Addele_2col(ele.closest(".half-left"));
                    }
                    else{
                        redistributeContent_when_Addele_2col(ele.closest(".half-right"));
                    }
                }
            }
        }
        else{
            if(ele.nextElementSibling){
                    if(checkFatherPart(ele,ele.nextElementSibling)){
                        swapElements(ele.nextElementSibling,ele);
                    }
                    else{
                        console.log("Noooo");
                    }
                
            }
        }
    });

    // thêm bên ngoài mục lớnn
    function handleClickPart_CT(position) {
        let part_avai = document.querySelectorAll(".content-left .part_ct");
        let parts_exists = [...part_avai].map(ptu=>{
            return ptu.getAttribute("class").split(" ")[0];
        })
        console.log(parts_exists);
        addNewItem.classList.remove("hidden");

        list_addNewItem.forEach(function(e) {
            console.log(check_part_avai(e,parts_exists));
            if(check_part_avai(e,parts_exists) == false ) e.classList.add("not_available");
            else{
                e.onclick = function() {
                    let parts = e.getAttribute("class").split(" ")[2];
                    console.log("Phần Thêm Mới : ",parts);
                    if (position === "before") {
                        ele.insertAdjacentElement("beforebegin", (parts == "skill") ? partSkill : (parts == "project") ? partProject : (parts == "awards") ? partAwards : (parts == "goals") ? partworkGoals : (parts == "certificate") ? partCertificate : (parts == "language") ? partLanguage : (parts == "overview") ? partOverview : (parts == "workexperience") ? partworkExp : (parts == "education") ? partEducation : partAnother);                    
                        console.log(ele.previousElementSibling);
                        if(getTemplateCV_Now() == "paper_mau10" || getTemplateCV_Now() == "paper_mau9" || getTemplateCV_Now() == "paper_mau8" || getTemplateCV_Now() == "paper_mau6" || getTemplateCV_Now() == "paper_mau4" || getTemplateCV_Now() == "paper_mau1" || getTemplateCV_Now() == "paper_mau0"){
                            ele.previousElementSibling.querySelector(".title").classList.add("have_line");
                        }
                        switch(getTemplateCV_Now()){
                            case "paper_mau0":
                                setColor_mauConlai();
                                break;
                            case "paper_mau1": 
                                setColor_mauConlai();
                                break;
                            case "paper_mau2":
                                setColor_mau2();                          
                                break;
                            case "paper_mau3":
                                setColor_mau3();                              
                                break;
                            case "paper_mau4":
                                setColor_mauConlai();                             
                                break;
                            case "paper_mau5":
                                setColor_mau5();                              
                                break;
                            case "paper_mau6":
                                setColor_mauConlai();                             
                                break;
                            case "paper_mau7":
                                setColor_mau7();
                                break;
                            case "paper_mau8":
                                setColor_mau8();
                                break
                            case "paper_mau9":
                                setColor_mau9_mau10();
                                break;
                            case "paper_mau10":
                                setColor_mau9_mau10();                           
                                break;
                            case "paper_mau11":
                                setColor_mauConlai();
                                break;
                            case "paper_mau12":
                                setColor_mauConlai();                           
                                break;
                            default:
                                console.log("Mẫu Không Hợp Lệ");
                        }  
                        redistributeContent_when_Addele();
                    } 
                    else if (position === "after") {
                        if(handlewhenaddPart_ct(ele) !== undefined){
                            handlewhenaddPart_ct(ele).insertAdjacentElement("afterend", (parts == "skill") ? partSkill : (parts == "project") ? partProject : (parts == "awards") ? partAwards : (parts == "goals") ? partworkGoals : (parts == "certificate") ? partCertificate : (parts == "language") ? partLanguage : (parts == "overview") ? partOverview : (parts == "workexperience") ? partworkExp : (parts == "education") ? partEducation : partAnother);
                        }
                        else ele.insertAdjacentElement("afterend", (parts == "skill") ? partSkill : (parts == "project") ? partProject : (parts == "awards") ? partAwards : (parts == "goals") ? partworkGoals : (parts == "certificate") ? partCertificate : (parts == "language") ? partLanguage : (parts == "overview") ? partOverview : (parts == "workexperience") ? partworkExp : (parts == "education") ? partEducation : partAnother);                        
                        if(getTemplateCV_Now() == "paper_mau10" || getTemplateCV_Now() == "paper_mau9" || getTemplateCV_Now() == "paper_mau8" || getTemplateCV_Now() == "paper_mau6" || getTemplateCV_Now() == "paper_mau4" || getTemplateCV_Now() == "paper_mau1" || getTemplateCV_Now() == "paper_mau0"){
                            ele.nextElementSibling.querySelector(".title").classList.add("have_line");
                        }
                        switch(getTemplateCV_Now()){
                            case "paper_mau0":
                                setColor_mauConlai();
                                break;
                            case "paper_mau1": 
                                setColor_mauConlai();
                                break;
                            case "paper_mau2":
                                setColor_mau2();                          
                                break;
                            case "paper_mau3":
                                setColor_mau3();                              
                                break;
                            case "paper_mau4":
                                setColor_mauConlai();                             
                                break;
                            case "paper_mau5":
                                setColor_mau5();                              
                                break;
                            case "paper_mau6":
                                setColor_mauConlai();                             
                                break;
                            case "paper_mau7":
                                setColor_mau7();
                                break;
                            case "paper_mau8":
                                setColor_mau8();
                                break
                            case "paper_mau9":
                                setColor_mau9_mau10();
                                break;
                            case "paper_mau10":
                                setColor_mau9_mau10();                           
                                break;
                            case "paper_mau11":
                                setColor_mauConlai();
                                break;
                            case "paper_mau12":
                                setColor_mauConlai();                           
                                break;
                            default:
                                console.log("Mẫu Không Hợp Lệ");
                        }  
                        redistributeContent_when_Addele();  
                    }
                    addNewItem.classList.add("hidden");
                };
            }
        });
    }
    // fix lỗi mẫu 2 cột ch check_avai
    function handleClickPart_CT_2col(position) {
        let part_avai_2col = document.querySelectorAll(".content-left .part_ct");
        let parts_exists_2col = [...part_avai_2col].map(ptu=>{
            return ptu.getAttribute("class").split(" ")[0];
        })
        addNewItem.classList.remove("hidden");
        list_addNewItem.forEach(function(e) {
            if(check_part_avai(e,parts_exists_2col) == false ) e.classList.add("not_available");
            else{
                e.onclick = function() {
                    let parts = e.getAttribute("class").split(" ")[2];
                    console.log("Phần Thêm Mới : ",parts);
                    if (position === "before") {
                        ele.insertAdjacentElement("beforebegin", (parts == "skill") ? partSkill : (parts == "project") ? partProject : (parts == "awards") ? partAwards : (parts == "goals") ? partworkGoals : (parts == "certificate") ? partCertificate : (parts == "language") ? partLanguage : (parts == "overview") ? partOverview : (parts == "workexperience") ? partworkExp : (parts == "education") ? partEducation : partAnother);                                              
                        if(getTemplateCV_Now() == "paper_mau4"){
                            let icon_crystal = document.createElement("section");
                            icon_crystal.classList.add("icon_crystal");
                            icon_crystal.style.backgroundColor = getColorCVNow();
                            console.log(icon_crystal);
                            ele.previousElementSibling.querySelector(".title").insertAdjacentElement("afterbegin",icon_crystal);
                        }
                        // Thêm gạch chân
                        if(getTemplateCV_Now() == "paper_mau10" || getTemplateCV_Now() == "paper_mau9" || getTemplateCV_Now() == "paper_mau8" || getTemplateCV_Now() == "paper_mau6" || getTemplateCV_Now() == "paper_mau4" || getTemplateCV_Now() == "paper_mau1"){
                            ele.previousElementSibling.querySelector(".title").classList.add("have_line");
                        }
                        switch(getTemplateCV_Now()){
                            case "paper_mau0":
                                    setColor_mauConlai();
                                    break;
                                case "paper_mau1": 
                                    setColor_mauConlai();
                                    break;
                                case "paper_mau2":
                                    setColor_mau2();                          
                                    break;
                                case "paper_mau3":
                                    setColor_mau3();                              
                                    break;
                                case "paper_mau4":
                                    setColor_mauConlai();                             
                                    break;
                                case "paper_mau5":
                                    setColor_mau5();                              
                                    break;
                                case "paper_mau6":
                                    setColor_mauConlai();                             
                                    break;
                                case "paper_mau7":
                                    setColor_mau7();
                                    break;
                                case "paper_mau8":
                                    setColor_mau8();
                                    break
                                case "paper_mau9":
                                    setColor_mau9_mau10();
                                    break;
                                case "paper_mau10":
                                    setColor_mau9_mau10();                           
                                    break;
                                case "paper_mau11":
                                    setColor_mauConlai();
                                    break;
                                case "paper_mau12":
                                    setColor_mauConlai();                           
                                    break;
                                default:
                                    console.log("Mẫu Không Hợp Lệ");
                                }  
                        if(ele.closest(".half-left")){
                            redistributeContent_when_Addele_2col(ele.closest(".half-left"));
                            editContent(copy,mauCV);
                        }
                        else{
                            redistributeContent_when_Addele_2col(ele.closest(".half-right"));
                        }          
                    } 
                    else if (position === "after") {
                        // kiểm tra nếu ở giấy ngay bên dưới mà có các phàn con của phần hiện tại đang muốn thêm thì ta sẽ select all 
                        // chúng và chèn phần mới vào phần tử ở cuối cùng trong giấy mới
                        if(handlewhenaddPart_ct(ele) !== undefined){
                            handlewhenaddPart_ct(ele).insertAdjacentElement("afterend", (parts == "skill") ? partSkill : (parts == "project") ? partProject : (parts == "awards") ? partAwards : (parts == "goals") ? partworkGoals : (parts == "certificate") ? partCertificate : (parts == "language") ? partLanguage : (parts == "overview") ? partOverview : (parts == "workexperience") ? partworkExp : (parts == "education") ? partEducation : partAnother);
                        }
                        else ele.insertAdjacentElement("afterend", (parts == "skill") ? partSkill : (parts == "project") ? partProject : (parts == "awards") ? partAwards : (parts == "goals") ? partworkGoals : (parts == "certificate") ? partCertificate : (parts == "language") ? partLanguage : (parts == "overview") ? partOverview : (parts == "workexperience") ? partworkExp : (parts == "education") ? partEducation : partAnother);                               
                        if(getTemplateCV_Now() == "paper_mau4"){
                            let icon_crystal = document.createElement("section");
                            icon_crystal.classList.add("icon_crystal");
                            icon_crystal.style.backgroundColor = getColorCVNow();
                            console.log(icon_crystal);
                            ele.nextElementSibling.querySelector(".title").insertAdjacentElement("afterbegin",icon_crystal);
                        }
                        if(getTemplateCV_Now() == "paper_mau10" || getTemplateCV_Now() == "paper_mau9" || getTemplateCV_Now() == "paper_mau8" || getTemplateCV_Now() == "paper_mau6" || getTemplateCV_Now() == "paper_mau4" || getTemplateCV_Now() == "paper_mau1"){
                            if(ele.nextElementSibling){
                                ele.nextElementSibling.querySelector(".title").classList.add("have_line");
                            }
                        }
                        switch(getTemplateCV_Now()){
                            case "paper_mau0":
                                setColor_mauConlai();
                                break;
                            case "paper_mau1": 
                                setColor_mauConlai();
                                break;
                            case "paper_mau2":
                                setColor_mau2();                          
                                break;
                            case "paper_mau3":
                                setColor_mau3();                              
                                break;
                            case "paper_mau4":
                                setColor_mauConlai();                             
                                break;
                            case "paper_mau5":
                                setColor_mau5();                              
                                break;
                            case "paper_mau6":
                                setColor_mauConlai();                             
                                break;
                            case "paper_mau7":
                                setColor_mau7();
                                break;
                            case "paper_mau8":
                                setColor_mau8();
                                break
                            case "paper_mau9":
                                setColor_mau9_mau10();
                                break;
                            case "paper_mau10":
                                setColor_mau9_mau10();                           
                                break;
                            case "paper_mau11":
                                setColor_mauConlai();
                                break;
                            case "paper_mau12":
                                setColor_mauConlai();                           
                                break;
                            default:
                                console.log("Mẫu Không Hợp Lệ");
                            }  
                        if(ele.closest(".half-left")){
                            redistributeContent_when_Addele_2col(ele.closest(".half-left"));
                        }
                        else{
                            redistributeContent_when_Addele_2col(ele.closest(".half-right"));
                        }        
                    }
                    addNewItem.classList.add("hidden");
                };
            }
        });
    }
    // thêm phần item trong mục lớn 
    function handleClickItem_In_Part_CT(position) {
            let copy = ele.cloneNode(true);
            if (position === "before") {
                ele.insertAdjacentElement("beforebegin", copy);  
                redistributeContent_when_Addele();                         
                editContent(copy,mauCV);           
            } 
            else if (position === "after") {
                ele.insertAdjacentElement("afterend", copy);
                redistributeContent_when_Addele();                          
                editContent(copy,mauCV);           
            }
    }
    function handleClickItem_In_Part_CT_2col(position) {
        let copy = ele.cloneNode(true);
            if (position === "before") {
                ele.insertAdjacentElement("beforebegin", copy);  
                editContent(copy,mauCV);           
                if(ele.closest(".half-left")){                  
                    redistributeContent_when_Addele_2col(copy.closest(".half-left"));
                }
                else{
                    
                    redistributeContent_when_Addele_2col(copy.closest(".half-right"));
                }                               
            } 
            else if (position === "after") {
                ele.insertAdjacentElement("afterend", copy);
                editContent(copy,mauCV);
                if(ele.closest(".half-left")){                    
                    redistributeContent_when_Addele_2col(copy.closest(".half-left"))
                }
                else{
                    
                    redistributeContent_when_Addele_2col(copy.closest(".half-right"))
                }                                
            }
    }
    console.log("Tại Phân Phần tử",ele);
    console.log("addUp:", addUp);
    console.log("addDown:", addDown);
    // Thêm sự kiện cho addUp và addDown
    addUp.addEventListener("click", function() {
        if(getTemplateCV_Now() == "paper_mau12" || getTemplateCV_Now() == "paper_mau3"){
            if(ele.classList.contains("information")){
                alert("Không thể thực hiện thêm ở phần này !");
                return;
            }
        }
        console.log("Mẫu Cv Khi nhấn add :",mauCV);
        if(mauCV == "mau_2col"){
            console.log(ele.closest(".part_in_paper")); 
            if(ele.classList.contains("item_in_part")){
                handleClickItem_In_Part_CT_2col("before");
            }
            else handleClickPart_CT_2col("before");
        }
        else{
            if(ele.classList.contains("item_in_part")){
                handleClickItem_In_Part_CT("before");
            }
            else handleClickPart_CT("before");
        }
    });
    // fix nốt trên add upp và xóa mauCv ở mẫu chỗ có getremind ( lấy độ dài)
    addDown.addEventListener("click", function() {
        console.log("Mẫu Cv Khi nhấn add :",mauCV);
        if(getTemplateCV_Now() == "paper_mau12" || getTemplateCV_Now() == "paper_mau3"){
            if(ele.classList.contains("information")){
                alert("Không thể thực hiện thêm ở phần này !");
                return;
            }
        }
        let loaiCV = (getTemplateCV_Now() == "paper_mau0" || getTemplateCV_Now() == "paper_mau2") ? "mau_1col" : "mau_2col";
        if(loaiCV == "mau_2col"){
            console.log(ele.closest(".part_in_paper")); 
            if(ele.classList.contains("item_in_part")){
                handleClickItem_In_Part_CT_2col("after");
            }
            else handleClickPart_CT_2col("after");
        }
        else{
            if(ele.classList.contains("item_in_part")){
                handleClickItem_In_Part_CT("after");
            }
            else handleClickPart_CT("after");
        }
    });
    removeEle.addEventListener("click",function(){
        let typepart = ele.getAttribute("class").split(" ")[0]
        let list_partItem = document.querySelector(`.list_partItem > div.${typepart}`);
        if(list_partItem){
            list_partItem.classList.remove("not_available");
        }
        if(ele.classList.contains("information")){
            alert("Không Thể Xóa Phần Này");
        }
        else{
            Fill_processing(ele); // sửa lỗi khi nhấn phím xóa thì mới gọi hàm này 
            handleRegion();
        }
    })
    // khi chọn phần này r thì những phần khác không thể bôi đen nữa 
    // console.error(currentSelection);
    
    // [bug] làm chức năng fontstyle khi bôi đen đoạn văn bản
    // btnBold.addEventListener("click",()=>{
    //     console.log("Văn Bản được bôi đậm là : ",selectedText);
    // })
    // [bug] selection chỉ nhận 1 phần tử đâu tiên ch có sự thay đổi 
}

function combine_the_parts(part){
    console.log(part);
    let namefatherpart = part.getAttribute("class").split(" ")[0];
    console.log(namefatherpart);
    childparts = content_left.querySelectorAll(`section[fatherpart="${namefatherpart}"]`);
    console.log(childparts);
    childparts.forEach(elem=>{
        part.querySelector(".ct_in_sectionSM").insertAdjacentElement("beforeend",elem);
    })
    return part;
}
// [bug] Phần xác nhập lại các ptu khi qua paper mới hoặc về paper cũ 

// console.log(suggest[0].heading.title);
// console.log(partsBig_in_CV[0].getAttribute("class").split(" ")[0]);

// test
textElements.forEach((ele)=>{
    ele.onclick = () =>{      
        suggest.forEach((e)=>{
            if(ele.closest(".part_ct").getAttribute("class").split(" ")[0] == e.heading.title){
                console.log(e);
            }
        })
    }
})


// Chuyển động trong phông chữ 
let btn_font_left = document.querySelector('.slide_font>button:first-child');
let btn_font_right = document.querySelector('.slide_font>button:last-child');
let list_font = document.querySelector('.list_fonts');
let khungnhin_f = document.querySelector('.khungnhin_f');
let fonts = document.querySelectorAll('.list_fonts div');

let check = 0;
btn_font_left.onclick = function(e){
    if(check < 1){
        btn_font_left.style.opacity = '0.4';
        e.preventDefault();
    }
    else{
        btn_font_right.style.opacity = '1';
        check--;
    }
    console.log(check);
    list_font.style.marginLeft = `-${check * khungnhin_f.offsetWidth}px`;
}

btn_font_right.onclick = function(e){
    if(check > fonts.length - 2){
        btn_font_right.style.opacity = '0.4';
        e.preventDefault();
    }
    else{
        btn_font_left.style.opacity = '1';
        check++;
    }
    console.log(check);
    list_font.style.marginLeft = `-${check * khungnhin_f.offsetWidth}px`;
}


// phần task Phông chữ;
const task = document.querySelectorAll('.congcu1 li');
let font = list_font.querySelectorAll('li');
let tab = document.querySelectorAll('.window');

font.forEach(function(ele){
    ele.onclick = function(e){
        let papers = document.querySelectorAll('.paper');
        papers.forEach(function(ele){
            ele.style.fontFamily = e.target.style.fontFamily;
            if(getTemplateCV_Now() == "paper_mau0" || getTemplateCV_Now() == "paper_mau2"){
                redistributeContent_when_Addele();
            }
            else{
                redistributeContent_when_Addele_2col(ele.querySelector(".half-left"));
                redistributeContent_when_Addele_2col(ele.querySelector(".half-right"));
            }
        })
    }
})

let font_size = document.querySelectorAll(".font_size input");

font_size.forEach(function(ele){
    ele.onchange = function(e){
        let papers = document.querySelectorAll('.paper');
        font_size.forEach(function(ele){
            ele.checked = false;
        })
        ele.checked = true;
        papers.forEach(function(ele){
            ele.style.fontSize = e.target.nextElementSibling.getAttribute("data_size");
            if(getTemplateCV_Now() == "paper_mau0" || getTemplateCV_Now() == "paper_mau2"){
                redistributeContent_when_Addele();
            }
            else{
                redistributeContent_when_Addele_2col(ele.querySelector(".half-left"));
                redistributeContent_when_Addele_2col(ele.querySelector(".half-right"));
            }
        })
    }
})

const closeAllWindows = () => {
    tab.forEach(window => {
        window.classList.add('hidden'); // Thêm class 'hidden' để ẩn window
    });
};

// Thêm sự kiện click cho từng tab
task.forEach(ta => {
    ta.addEventListener('click', (event) => {
        const tabId = ta.getAttribute('tabid'); // Lấy tabid của tab
        // if(!tab[tabId - 1].classList.contains('hidden')){
        //     tab[tabId - 1].classList.add('hidden');  
        // }
        // Ngăn chặn sự kiện click lan ra bên ngoài
        event.stopPropagation();

        // Đóng tất cả các window
        closeAllWindows();

        // Mở window tương ứng với tab được click
        tab.forEach((cc=>{
            cc.classList.add('hidden');
        }))
        tab[tabId - 1].classList.remove('hidden');        
    });
});

// Xử lý click ra bên ngoài các window
document.addEventListener('click', () => {
    closeAllWindows(); // Đóng tất cả các window khi click ra ngoài
});

// Ngăn sự kiện click bên trong window bị lan ra ngoài
tab.forEach(window => {
    window.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});

// Phần task màu sắc 

let btn_color_left = document.querySelector('.ds_mau>button:first-child');
let btn_color_right = document.querySelector('.ds_mau>button:last-child');
let khungnhin_c = document.querySelector('.khungnhin_c');
let list_color = document.querySelector('.daimau');
let colors = document.querySelectorAll('.bangmau');
let daianhcv = document.querySelector(".daianhcv");
let list_cv = document.querySelectorAll(".daianhcv li");
let introduce = document.querySelector(".introduce");
let an_anh = document.querySelector(".an_anh");
let imgCV = document.querySelector(".heading_paper img");
let is_default = false;
// màu hiện tại 
let currentColor = "#f55555";
// heading_paper.style.backgroundColor = currentColor;
// phần title thêm mới vào những mẫu có 
let title_in4 = document.createElement("section");
    title_in4.innerHTML = `<i style="margin-left: 3px;" class="fa-solid fa-info"></i>
                            <p>
                                Information
                            </p>`   
    title_in4.classList.add("title");

function resetCV(paper) {
    console.log("paper ở hàm resetCv",paper);
    let title_HD = document.querySelector(".title_HD");
    let in4_individual = document.querySelector(".information");
    let introduce = document.querySelector(".introduce");
    let contentCV = document.querySelector(".content_CV");
    let heading_paper = document.querySelector(".heading_paper");
    let img_CV = document.querySelector(".anh_CV img");
    let part_another = document.querySelector(".half-left");
    let personalIn4 = document.querySelector(".personal_in4");
    let anh_CV = document.querySelector(".anh_CV");
    let part_two = paper.querySelector(".half-right");
    
    paper.classList.remove(
        "paper_mau1", "paper_mau2", "paper_mau3", "paper_mau4", 
        "paper_mau5", "paper_mau6", "paper_mau7", "paper_mau8", 
        "paper_mau9", "paper_mau10", "paper_mau11", "paper_mau12"
    );

    heading_paper.classList.remove(
        "hd_mau2", "hd_mau3", "heading_paper_mau4", "heading_paper_mau5", 
        "heading_paper_mau6", "heading_paper_mau7", "heading_paper_mau8", 
        "heading_paper_mau9", "heading_paper_mau10", "heading_paper_mau11", 
        "heading_paper_mau12"
    );
    title_cv = document.querySelectorAll(".title");
    
    let mau;
    if(paper.getAttribute("class").split(" ").length > 11){
        mau = paper.getAttribute("class").split(" ")[1].substring(6);
    }
    handleErrorHD();
    // mẫu 1
    title_in4.style.display = "none";
    introduce.insertAdjacentElement("afterbegin",title_HD);
    title_HD.classList.remove("item_in_part");

    // mẫu 3
    heading_paper.insertAdjacentElement("afterbegin",introduce);
    introduce.classList.remove("introduce_mau3");
    introduce.insertAdjacentElement("afterbegin",in4_individual);
    introduce.insertAdjacentElement("afterbegin",title_HD);
    heading_paper.insertAdjacentElement("afterbegin",document.querySelector(".anh_CV"));
    contentCV.style.marginTop = "0";
    if(paper.querySelector(".phan_phu")){
        paper.querySelector(".phan_phu").remove();
        title_in4.style.display = "none";
    }
    title_cv.forEach(ele=>{
        ele.classList.remove("ct_mau3");
    })
    title_cv.forEach(ele=>{
        ele.classList.add("have_line");
    })
    partsBig_in_CV.forEach(ele=>{
        ele.classList.remove("part_ct_mau3");
    })
    // Mẫu 4
    in4_individual.classList.remove("in4_mau4");
    heading_paper.classList.add("part_one");
    contentCV.classList.add("part_two");
    if(part_another){
        if(part_another.nextElementSibling){
            if(!part_another.nextElementSibling.classList.contains("content_CV")){
                part_another.nextElementSibling.classList.remove("part_two");
                part_another.nextElementSibling.removeAttribute("style");
            }
        }
        part_another.removeAttribute("style");
    }
    // if(part_another.closest(".content_CV")){
    //     part_another.remove();
    // }
    paper.querySelectorAll(".title").forEach(ele=>{
        if(ele.querySelector(".icon_crystal")){
            ele.querySelector(".icon_crystal").remove();
        }
    })
    // Mẫu 5
    introduce.classList.remove("introduce_mau5");

    // Mẫu 7 
    imgCV.classList.remove("img_cv_mau7");
    in4_individual.classList.remove("information_mau7");
    contentCV.classList.remove("content_cv_mau7");
    // Mẫu 8
    if(mau == "mau8"){
        contentCV.insertAdjacentElement("afterbegin",title_HD);
        title_HD.removeAttribute("style");
    }
    in4_individual.querySelectorAll("ul>li").forEach(ele=>{
        ele.classList.remove("item_in_part");
    })
    // mẫu 9 
    paper.insertAdjacentElement("afterbegin",heading_paper);
    in4_individual.removeAttribute("style");
    // Mẫu 11
    personalIn4.classList.remove("item_in_part");
    anh_CV.classList.remove("item_in_part");
    // Mẫu 12
    in4_individual.classList.remove("information_mau12");
    heading_paper.querySelectorAll(".information ul>li label:first-child i").forEach(ele=>{
        ele.style.display = "none";
    })
    heading_paper.querySelectorAll(".information ul>li label:first-child b").forEach(ele=>{
        ele.classList.remove("hidden");
    })
    if (img_CV.classList.contains("hidden")) {
        img_CV.classList.remove("hidden");
    }
}

let mausac = document.querySelectorAll('.daimau li>span');
let title_HD  = document.querySelector(".title_HD");
let anh_CV = document.querySelector(".anh_CV");
function xoa_ky_tu(paper){
    paper.querySelectorAll(".title").forEach(ele=>{
        if(ele.querySelector(".icon_crystal")){
            ele.querySelector(".icon_crystal").remove();
        }
    })
}
function handleErrorHD(){
    let papers = Array.from(content_left.querySelectorAll('.paper'));
    papers.forEach((pa,index)=>{
        let part_two = pa.querySelector(".half-right");
        if(index == 0){
            let sections_handle = pa.querySelectorAll('.introduce > section:not(.title_HD):not(.information)');
            console.log("----------------------------------------------------------------------------------------");
            if(sections_handle.length > 0){
                sections_handle.forEach(ele=>{
                    part_two.insertAdjacentElement("beforeend",ele);
                    redistributeContent_when_Addele_2col(part_two);
                })
            }
        }
        else{
            let sections_inhd_handle = pa.querySelectorAll('.half-left > section:not(.title_HD):not(.information)');
            sections_inhd_handle.forEach(ele=>{
                part_two.insertAdjacentElement("beforeend",ele);
                redistributeContent_when_Addele_2col(part_two);
            })
        }
    })
}
function convert(paper){
    let list_item_in_part = paper.querySelector(".half-left").querySelectorAll(".paragraph");
    console.log(list_item_in_part);
    if(list_item_in_part.length > 0){
        list_item_in_part.forEach(e=>{
            paper.querySelector(".half-right").appendChild(e);
            redistributeContent_1col(paper);
        })
    }
}
function removeClass_in_hd(heading_paper){
    heading_paper.classList.remove("half-left");
}
function addClassToStart(element, newClass) {
    // Tách các class hiện có thành một mảng
    const currentClasses = element.className.split(' ');
    
    // Kiểm tra nếu class mới đã tồn tại, nếu không thì thêm vào đầu
    if (!currentClasses.includes(newClass)) {
        currentClasses.unshift(newClass);
        element.className = currentClasses.join(' '); // Gán lại chuỗi class
    }
}
function Adjust_part_left(paper){
    let heading_paper = paper.querySelector(".heading_paper") || "";
    let part_two = paper.querySelector(".half-right");
    part_two.previousElementSibling.classList.add("half-left");
    heading_paper.classList.remove("half-left");
}
function Mau0(paper){
    xoa_ky_tu(paper);
    in4_individual = paper.querySelector(".information") || ""; 
    title_HD = paper.querySelector(".title_HD") || "";
    let heading_paper = paper.querySelector(".heading_paper");
    let contentCV = paper.querySelector(".content_CV");
    let part_two = paper.querySelector(".half-right");
    let introduce = paper.querySelector(".introduce") || "";
    paper.setAttribute("class","paper");
    if(title_HD){
        if(title_HD.closest(".content_CV")){
            in4_individual.insertAdjacentElement("afterbegin",title_HD);
        }
    }
    console.log("///////////////////////////");
    handleErrorHD();
    contentCV.style.paddingTop = "0";
    if(!heading_paper.querySelector(".anh_CV")){
        paper.style.paddingTop = "24px";
    }
    Adjust_part_left(paper);
    let part_one = paper.querySelector(".half-left");
    heading_paper.setAttribute("style","");
    heading_paper.setAttribute("class","heading_paper part_in_paper");

    if(paper.previousElementSibling){
        heading_paper.style.display = "none";
    }
    paper.insertAdjacentElement("afterbegin",heading_paper);
    paper.style.marginTop = "24px";
    paper.querySelector(".half-right").setAttribute("style","");
    part_two.removeAttribute("style");
    convert(paper);
}
function Mau1(paper){
    xoa_ky_tu(paper);
    let introduce,title_HD,in4_individual,img_CV;
    paper.setAttribute("class","paper");
    let heading_paper = paper.querySelector(".heading_paper");
    let contentCV = paper.querySelector(".content_CV");
    let part_one = paper.querySelector(".half-left")
    let part_two = paper.querySelector(".half-right");
    
    introduce = paper.querySelector(".introduce") || "";

    title_HD = paper.querySelector(".title_HD") || "";
    in4_individual = paper.querySelector(".information") || ""; 
    img_CV = paper.querySelector(".anh_CV img") || "";
    handleErrorHD();
    // let heading_paper = document.querySelector(".heading_paper");
    //     heading_paper.style.display = "block";
    if(introduce)
        introduce.classList.add("ct_in_sectionSM");
    if(title_in4){
        title_in4.classList.add("bold","title" ,"possible_Part" ,"item_in_part","have_line");
        title_in4.style.display = "flex";
    }
    if(img_CV)
        img_CV.parentNode.classList.add("item_in_part");
    if(title_HD){
        title_HD.classList.add("item_in_part");
        contentCV.insertBefore(title_HD,contentCV.firstChild);
    }
    if(in4_individual){
        in4_individual.classList.add("paragraph","part_ct","paragraph");
        in4_individual.insertAdjacentElement("afterbegin",title_in4);
        in4_individual.querySelectorAll("ul>li").forEach(ele=>{
            ele.classList.add("paragraph","item_in_part","content_in_CV","possible_Part");
        })
    }
    // }
    heading_paper.classList.remove("heading_paper_mau7");
    imgCV.removeAttribute("style");
    part_one.removeAttribute("style");
    paper.classList.add("paper_mau1");
    part_two.removeAttribute("style");
    paper.style.paddingTop = "";
    heading_paper.setAttribute("style","");
    heading_paper.setAttribute("class","heading_paper part_in_paper");
    addClassToStart(heading_paper,"half-left");

    paper.insertAdjacentElement("afterbegin",heading_paper);
    contentCV.setAttribute("style","");
    paper.querySelector(".heading_paper").style.display = "block";

    redistributeContent_2col(heading_paper);
    redistributeContent_2col(part_two);
}
function Mau2(paper){
    let heading_paper = paper.querySelector(".heading_paper");
    title_cv = paper.querySelectorAll(".title") || "";
    let contentCV = paper.querySelector(".content_CV");
    paper.setAttribute("class","paper");
    paper.classList.add("paper_mau2");
    handleErrorHD();
    heading_paper.setAttribute("style","");
    contentCV.setAttribute("style","");
    contentCV.querySelector(".half-right").setAttribute("style","");
    imgCV.removeAttribute("style");
    Adjust_part_left(paper);
    if(paper.previousElementSibling){
        if(paper.previousElementSibling.classList.contains("paper")){
            heading_paper.style.display = "none";
            contentCV.style.paddingTop = "24px";
        }
    }
    paper.style.paddingTop = "0";
    convert(paper);
}
function Mau3(paper){

    let introduce,title_HD,in4_individual,title_cv;
    let contentCV = paper.querySelector(".content_CV");
    let heading_paper = paper.querySelector(".heading_paper");
    paper.setAttribute("class","paper");
    title_cv = paper.querySelectorAll(".title") || "";
    introduce = paper.querySelector(".introduce")|| "";
    title_HD = paper.querySelector(".title_HD") || "";
    contentCV.classList.remove("part_two");
    heading_paper.classList.remove("part_one");

    let part_two = paper.querySelector(".half-right");
    handleErrorHD();
    part_two.classList.add("part_two");
    part_two.setAttribute("style","");
    paper.style.paddingTop = "";
    if(introduce){
        in4_individual = introduce.querySelector(".information") || ""; 
    }
    if(paper.previousElementSibling){
        if(paper.previousElementSibling.classList.contains("paper")){
            contentCV.style.paddingTop = "24px";
        }
    }
    Adjust_part_left(paper);
    let part_one = paper.querySelector(".half-left");
    part_one.classList.add("part_one");
    part_one.setAttribute("style",""); 
    if(introduce || title_HD || in4_individual ){
        introduce.classList.add("ct_in_sectionSM");
        introduce.classList.add("introduce_mau3");
        title_HD.classList.add("item_in_part");
        in4_individual.classList.remove("part_ct");
        
        in4_individual.insertAdjacentElement("afterbegin",title_in4);
        title_in4.classList.add("bold","title" ,"possible_Part" ,"item_in_part");
        title_in4.style.display = "flex";
        
        let sp_part = document.createElement("section");
        let sp_part2 = document.createElement("section");
        sp_part.classList.add("phan_phu");

        // phần ở dưới 
        paper.insertAdjacentElement("afterbegin",sp_part);
        sp_part.append(introduce);

        // Phần ở trên cùng 
        sp_part2.append(paper.querySelector(".anh_CV"));
        sp_part2.append(in4_individual);

        // thêm giần trên cùng lên trên phần phụ 
        sp_part.insertAdjacentElement("afterbegin",sp_part2);   
        contentCV.style.marginTop = `${sp_part.offsetHeight - 20}px`;  
        sp_part.querySelectorAll(".information ul>li label:first-child>b").forEach(ele=>{
            ele.classList.add("hidden");
        })
        sp_part.querySelectorAll(".information ul>li label:first-child>i").forEach(ele=>{
            ele.style.display = "block";
        })
        title_cv.forEach(ele=>{
            ele.classList.remove("have_line");
        })
    }
    imgCV.removeAttribute("style");
    heading_paper.setAttribute("style","");
    heading_paper.classList.add("hd_mau3");
    heading_paper.style.display = "block";
    paper.insertAdjacentElement("afterbegin",heading_paper);
    paper.classList.add("paper_mau3");

    redistributeContent_2col(part_two);   
}
function Mau4(paper){
    let introduce , title_HD , in4_individual;
    imgCV.classList.add("hidden");
    introduce = document.querySelector(".introduce") || "";
    title_HD = document.querySelector(".title_HD")|| "";
    in4_individual = introduce.querySelector(".information")|| ""; 
    let heading_paper = paper.querySelector(".heading_paper");
    let contentCV = paper.querySelector(".content_CV");
    let part_two = contentCV.querySelector(".half-right");

    // handleErrorHD();
    paper.setAttribute("class","paper");
    title_in4.classList.add("bold","title" ,"possible_Part" ,"item_in_part");
    contentCV.classList.remove("part_two");
    contentCV.style.width = "100%";
    heading_paper.classList.remove("part_one"); 
    if(paper.previousElementSibling){
        if(paper.previousElementSibling.classList.contains("paper")){
            heading_paper.style.display = "none";
            contentCV.style.padding = "24px 0";
        }
    }
    Adjust_part_left(paper);
    let part_one = paper.querySelector(".half-left");
    if(in4_individual){
        in4_individual.querySelectorAll("li").forEach(li=>{
            li.classList.add("item_in_part");
        })
        in4_individual.classList.add("paragraph","part_ct","paragraph","in4_mau4");

        in4_individual.insertAdjacentElement("afterbegin",title_in4);

        part_one.insertAdjacentElement("afterbegin",in4_individual);
    }
        
        // Phần nửa bên trái
        part_one.classList.add("part_one");
        part_two.classList.add("part_two");
        
        introduce.classList.add("ct_in_sectionSM");
        title_HD.classList.add("item_in_part");
        title_in4.style.display = "flex";
        
        title_in4.classList.add("have_line");
        introduce.insertAdjacentElement("afterbegin",title_HD);
        heading_paper.setAttribute("class","heading_paper part_in_paper");
        heading_paper.classList.add("heading_paper_mau4"); 
        
        paper.classList.add("paper_mau4");
        contentCV.querySelectorAll(".title").forEach(ele=>{
            let icon_crystal = document.createElement("section");
            icon_crystal.classList.add("icon_crystal");
            icon_crystal.style.backgroundColor = "#f55555"; 
            ele.insertAdjacentElement("afterbegin",icon_crystal);
        })
        
        // let item_in_each_paper = contentCV.querySelectorAll(".item_in_part");
        redistributeContent_2col(part_one);
        redistributeContent_2col(part_two); 
        
}
function Mau5(paper){
    xoa_ky_tu(paper);
    let introduce , title_HD , in4_individual;
    imgCV.classList.add("hidden");
    introduce = document.querySelector(".introduce") || "";
    title_HD = document.querySelector(".title_HD")|| "";
    in4_individual = introduce.querySelector(".information")|| ""; 
    let heading_paper = paper.querySelector(".heading_paper");
    let contentCV = paper.querySelector(".content_CV");
    let part_two = contentCV.querySelector(".half-right");
    // handleErrorHD();
    contentCV.style.width = "100%";

    paper.setAttribute("class","paper");
    title_in4.classList.add("bold","title" ,"possible_Part" ,"item_in_part");
    contentCV.classList.remove("part_two");
    heading_paper.classList.remove("part_one"); 
    if(paper.previousElementSibling){
        if(paper.previousElementSibling.classList.contains("paper")){
            heading_paper.style.display = "none";
            contentCV.style.padding = "24px 0";
        }
    }
    Adjust_part_left(paper);
    let part_one = paper.querySelector(".half-left");
    if(in4_individual){
            in4_individual.querySelectorAll("li").forEach(li=>{
                li.classList.add("item_in_part");
            })
            in4_individual.classList.add("paragraph","part_ct","paragraph","in4_mau4");

            in4_individual.insertAdjacentElement("afterbegin",title_in4);

            part_one.insertAdjacentElement("afterbegin",in4_individual);
        }
        
        // Phần nửa bên trái
        part_one.classList.add("part_one");
        part_two.classList.add("part_two");
        
        introduce.classList.add("ct_in_sectionSM","introduce_mau5");
        title_HD.classList.add("item_in_part");
        title_in4.style.display = "flex";
        
        title_in4.classList.add("have_line");
        introduce.insertAdjacentElement("afterbegin",title_HD);
        heading_paper.setAttribute("class","heading_paper part_in_paper");
        heading_paper.classList.add("heading_paper_mau5"); 
        heading_paper.removeAttribute("style");
        paper.classList.add("paper_mau5");
        
        // let item_in_each_paper = contentCV.querySelectorAll(".item_in_part");
        redistributeContent_2col(part_one);
        redistributeContent_2col(part_two); 
}
function Mau6(paper){
    xoa_ky_tu(paper);
    let introduce , title_HD , in4_individual;
    introduce = document.querySelector(".introduce") || "";
    title_HD = document.querySelector(".title_HD")|| "";
    in4_individual = introduce.querySelector(".information")|| ""; 
    title_cv = document.querySelectorAll(".title");
    let heading_paper = paper.querySelector(".heading_paper") || "";
    let contentCV = paper.querySelector(".content_CV");
    let part_two = contentCV.querySelector(".half-right");
    contentCV.style.width = "100%";
    
    // handleErrorHD();
    paper.setAttribute("class","paper");
    title_in4.classList.add("bold","title" ,"possible_Part" ,"item_in_part");
    contentCV.classList.remove("part_two");
    heading_paper.classList.remove("part_one"); 
    if(paper.previousElementSibling){
        if(paper.previousElementSibling.classList.contains("paper")){
            heading_paper.style.display = "none";
            contentCV.style.paddingLeft = "24px";
            contentCV.style.paddingRight = "24px";

        }
    }

    title_cv.forEach(ele=>{
        ele.classList.add("have_line");
    })
    
    Adjust_part_left(paper);
    let part_one = paper.querySelector(".half-left");
    if(in4_individual){
        in4_individual.querySelectorAll("li").forEach(li=>{
            li.classList.add("item_in_part");
        })
        in4_individual.classList.add("paragraph","part_ct","paragraph","in4_mau4");
        
        in4_individual.insertAdjacentElement("afterbegin",title_in4);
        
        part_one.insertAdjacentElement("afterbegin",in4_individual);
    }
    // Phần nửa bên trái
    part_one.classList.add("part_one");
    part_two.classList.add("part_two");
    
    introduce.classList.add("ct_in_sectionSM");
    title_HD.classList.add("item_in_part");
    title_in4.style.display = "flex";
    
    anh_CV.querySelector("img").classList.remove("hidden");
    introduce.classList.remove("introduce_mau5","introduce_mau3");

    title_in4.classList.add("have_line");
    introduce.insertAdjacentElement("afterbegin",title_HD);
        heading_paper.setAttribute("class","heading_paper part_in_paper"); 
        
        paper.classList.add("paper_mau6");
        contentCV.removeAttribute("style");
        heading_paper.classList.add("heading_paper_mau6");
        
        // let item_in_each_paper = contentCV.querySelectorAll(".item_in_part");
        redistributeContent_2col(part_one);
        redistributeContent_2col(part_two); 
}
function Mau7(paper){

    xoa_ky_tu(paper);
    let introduce , title_HD , in4_individual;
    introduce = document.querySelector(".introduce") || "";
    title_HD = document.querySelector(".title_HD")|| "";
    in4_individual = introduce.querySelector(".information")|| ""; 
    title_cv = document.querySelectorAll(".title");
    let heading_paper = paper.querySelector(".heading_paper");
    let contentCV = paper.querySelector(".content_CV");
    let part_two = contentCV.querySelector(".half-right");

    // handleErrorHD();
    paper.setAttribute("class","paper");
    title_in4.classList.add("bold","title" ,"possible_Part" ,"item_in_part");
    contentCV.classList.remove("part_two");
    heading_paper.classList.remove("part_one"); 
    if(paper.previousElementSibling){
        if(paper.previousElementSibling.classList.contains("paper")){
            heading_paper.style.display = "none";
            contentCV.style.padding = "24px 0";
        }
    }
    title_cv.forEach(ele=>{
        ele.classList.remove("have_line");
    })
    anh_CV.querySelector("img").classList.remove("hidden");
    introduce.classList.remove("introduce_mau5");
    Adjust_part_left(paper);
    let part_one = paper.querySelector(".half-left");
    if(in4_individual){
        in4_individual.querySelectorAll("li").forEach(li=>{
            li.classList.add("item_in_part");
        })
        in4_individual.classList.add("paragraph","part_ct","paragraph","information_mau7");
        
        in4_individual.insertAdjacentElement("afterbegin",title_in4);
        
        part_one.insertAdjacentElement("afterbegin",in4_individual);
    }
    
    // Phần nửa bên trái
    part_one.classList.add("part_one");
    part_two.classList.add("part_two");
    imgCV.removeAttribute("style");
    imgCV.style.border = "4px solid #aaaaaa";
    introduce.classList.add("ct_in_sectionSM");
    title_HD.classList.add("item_in_part");
    title_in4.style.display = "flex";
    title_HD.querySelector("section:first-child").style.margin = "0px";

    introduce.insertAdjacentElement("afterbegin",title_HD);
        heading_paper.setAttribute("class","heading_paper part_in_paper"); 
        
        paper.classList.add("paper_mau7");
        heading_paper.classList.add("heading_paper_mau7");
        contentCV.removeAttribute("style");
        redistributeContent_2col(part_one);
        redistributeContent_2col(part_two);
}
function Mau8(paper){

    xoa_ky_tu(paper);
    let introduce,title_HD,in4_individual,img_CV;
    paper.setAttribute("class","paper");
    let heading_paper = paper.querySelector(".heading_paper");
    let contentCV = paper.querySelector(".content_CV");
    let part_one = paper.querySelector(".half-left");
    let part_two = contentCV.querySelector(".half-right");

    introduce = paper.querySelector(".introduce") || "";
    title_HD = paper.querySelector(".title_HD") || "";
    in4_individual = paper.querySelector(".information") || ""; 
    img_CV = paper.querySelector(".anh_CV img") || "";
    handleErrorHD();
    
    if(introduce){
        introduce.classList.add("ct_in_sectionSM");
        introduce.classList.remove("introduce_mau5","introduce_mau3");
    }
    if(title_in4){
        title_in4.classList.add("bold","title" ,"possible_Part" ,"item_in_part");
        title_in4.style.display = "flex";
    }
    if(img_CV)
        img_CV.parentNode.classList.add("item_in_part");
    if(title_HD){
        title_HD.classList.add("item_in_part");
        contentCV.insertBefore(title_HD,contentCV.firstChild);
    }
    if(in4_individual){
        in4_individual.classList.add("paragraph","part_ct","paragraph");
        in4_individual.style.display = "inline-block";
        in4_individual.insertAdjacentElement("afterbegin",title_in4);

        in4_individual.querySelectorAll("li").forEach(ele=>{
            ele.classList.add("paragraph","item_in_part","content_in_CV","possible_Part");
        })
        in4_individual.querySelectorAll("section").forEach(ele=>{
            ele.style.width = "100%";
        })
    }   
    heading_paper.classList.remove("heading_paper_mau7");
    
    part_two.removeAttribute("style");
    paper.classList.add("paper_mau8");
    paper.style.marginTop = "24px";
    paper.style.paddingTop = "";
    paper.querySelector(".heading_paper").style.display = "block";
    paper.insertAdjacentElement("beforeend",heading_paper);
    contentCV.setAttribute("style","");
    imgCV.removeAttribute("style");
    heading_paper.setAttribute("style","");
    heading_paper.setAttribute("class","heading_paper part_in_paper");
    addClassToStart(heading_paper,"half-left");
    part_one.classList.remove("half-left");
    redistributeContent_2col(heading_paper);
    redistributeContent_2col(part_two);
}
function Mau9(paper){
    xoa_ky_tu(paper);
    let introduce , title_HD , in4_individual;
    introduce = document.querySelector(".introduce") || "";
    title_HD = document.querySelector(".title_HD")|| "";
    in4_individual = introduce.querySelector(".information")|| ""; 
    title_cv = document.querySelectorAll(".title");
    let heading_paper = paper.querySelector(".heading_paper") || "";
    let contentCV = paper.querySelector(".content_CV");
    let part_two = contentCV.querySelector(".half-right");
    
    paper.setAttribute("class","paper");
    title_in4.classList.add("bold","title" ,"possible_Part" ,"item_in_part","have_line");
    contentCV.classList.remove("part_two");
    // heading_paper.classList.remove("part_one"); 
    if(paper.previousElementSibling){
        if(paper.previousElementSibling.classList.contains("paper")){
            heading_paper.style.display = "none";
            contentCV.style.padding = "24px 0";
        }
    }
    // handleErrorHD();
    title_cv.forEach(ele=>{
        ele.classList.add("have_line");
    })
    Adjust_part_left(paper);
    let part_one = paper.querySelector(".half-left");
    if(in4_individual){
        in4_individual.querySelectorAll("li").forEach(li=>{
            li.classList.add("item_in_part");
        })
        in4_individual.classList.add("paragraph","part_ct","in4_mau4");     
        in4_individual.insertAdjacentElement("afterbegin",title_in4);
        part_one.insertAdjacentElement("afterbegin",in4_individual);
        in4_individual.style.display = "inline-block";
        in4_individual.style.width = "100%";
    }
    
    // Phần nửa bên trái
    part_one.classList.add("part_one");
    // part_one.style.width = "40%";
    part_one.style.height = "-1%";
    part_one.style.paddingRight = "12px";
    part_one.style.borderRight = "1px solid #ddd";
    // Phần nửa bên phải
    part_two.style.paddingLeft = "12px";
    // part_two.style.width = "60%";
    part_two.classList.add("part_two");
    
    introduce.classList.add("ct_in_sectionSM");
    title_HD.classList.add("item_in_part");
    title_in4.style.display = "flex";
    
    anh_CV.querySelector("img").classList.remove("hidden");
    introduce.classList.remove("introduce_mau5","introduce_mau3");
    
    title_in4.classList.add("have_line");
    heading_paper.setAttribute("class","heading_paper part_in_paper"); 
    heading_paper.style.removeProperty("display");

    if(paper.previousElementSibling){
        if(paper.previousElementSibling.classList.contains("paper")){
            heading_paper.style.display = "none";
        }
    }
    introduce.removeAttribute("style");
    introduce.insertAdjacentElement("afterbegin",title_HD);
    paper.classList.add("paper_mau9");
    contentCV.removeAttribute("style");
        
        // let item_in_each_paper = contentCV.querySelectorAll(".item_in_part");
    redistributeContent_2col(part_one);
    redistributeContent_2col(part_two); 

}
function Mau10(paper){
    xoa_ky_tu(paper);
    let title_HD = paper.querySelector(".title_HD") || "";
    let in4_individual = introduce.querySelector(".information") || ""; 
    let contentCV = paper.querySelector(".content_CV") || "";
    let heading_paper = paper.querySelector(".heading_paper") || "";
    
    let part_two = paper.querySelector(".half-right");
    paper.setAttribute("class","paper");
    contentCV.classList.remove("part_two");
    part_two.classList.add("part_two");
    
    title_in4.classList.add("bold","title" ,"possible_Part","have_line");
    introduce.classList.add("ct_in_sectionSM");
    handleErrorHD();
    if(in4_individual){
        in4_individual.querySelectorAll("li").forEach(li=>{
            li.classList.add("item_in_part");
        })
            in4_individual.classList.add("paragraph","part_ct","item_in_part");
            in4_individual.insertAdjacentElement("afterbegin",title_in4);
            in4_individual.style.display = "inline-block";
            in4_individual.style.width = "100%";
            contentCV.insertAdjacentElement("afterbegin",in4_individual);
        }
        paper.insertAdjacentElement("afterbegin",heading_paper);
        
        title_in4.style.display = "flex";
        introduce.classList.remove("introduce_mau5","introduce_mau3");
        
        if(title_HD){
            title_HD.classList.add("paragraph","part_ct","item_in_part");
            contentCV.insertAdjacentElement("afterbegin",title_HD);
        }
        heading_paper.removeAttribute("style");
        heading_paper.classList.remove("heading_paper_mau7");
        paper.classList.add("paper_mau10");
        Adjust_part_left(paper);
        let part_one = paper.querySelector(".half-left");
        if(!heading_paper.querySelector(".anh_CV")){
            const newAnhCV = document.createElement('div');
            newAnhCV.classList.add('anh_CV');
            heading_paper.appendChild(newAnhCV);
        }
        part_one.removeAttribute("style");
        part_two.removeAttribute("style");
        if(paper.previousElementSibling){
            if(paper.previousElementSibling.classList.contains("paper")){
                heading_paper.style.width = "30%";
                contentCV.style.width = "70%";
            }
        }
        redistributeContent_2col(part_two);
}
function Mau11(paper){
    xoa_ky_tu(paper);
    let introduce , title_HD , in4_individual;
    introduce = document.querySelector(".introduce") || "";
    title_HD = document.querySelector(".title_HD")|| "";
    in4_individual = introduce.querySelector(".information")|| ""; 
    title_cv = document.querySelectorAll(".title");
    let heading_paper = paper.querySelector(".heading_paper") || "";
    let contentCV = paper.querySelector(".content_CV");
    let part_two = paper.querySelector(".half-right");
    let anh_CV = paper.querySelector(".anh_CV") || "";
    anh_CV.classList.add("item_in_part");
    paper.setAttribute("class","paper");
    title_in4.classList.add("bold","title" ,"possible_Part" ,"item_in_part");
    contentCV.classList.remove("part_two");
    heading_paper.classList.remove("part_one"); 
    if(paper.previousElementSibling){
        if(paper.previousElementSibling.classList.contains("paper")){
            heading_paper.style.display = "none";
            contentCV.style.padding = "24px 0";
        }
    }
    // handleErrorHD();
    title_cv.forEach(ele=>{
        ele.classList.add("have_line");
    })
    title_HD.querySelector("b").classList.add("title_mau11");
    heading_paper.classList.add("heading_paper_mau11");
    paper.classList.add("paper_mau11");
    title_in4.style.display = "flex";
    
    Adjust_part_left(paper);
    let part_one = paper.querySelector(".half-left");
    if(in4_individual){
        in4_individual.classList.add("paragraph","part_ct","paragraph");
        in4_individual.querySelectorAll("li").forEach(li=>{
            li.classList.add("item_in_part");
        })
        in4_individual.insertAdjacentElement("afterbegin",title_in4);
        
        part_one.insertAdjacentElement("afterbegin",in4_individual);
        in4_individual.insertAdjacentElement("afterbegin",imgCV.parentElement);
    }
    
    // Phần nửa bên trái
    part_one.classList.add("part_one");
    // part_one.style.width = "40%";
    part_one.style.height = "-1%";
    part_one.style.paddingRight = "12px";
    part_one.style.borderRight = "none" 
    // Phần nửa bên phải
    part_two.style.paddingLeft = "12px";
    // part_two.style.width = "60%";
    part_two.classList.add("part_two");
    imgCV.removeAttribute("style");
    introduce.classList.add("ct_in_sectionSM");
    title_HD.classList.add("item_in_part");
    
    introduce.classList.remove("introduce_mau5","introduce_mau3");
    
    title_in4.classList.add("have_line");
    introduce.insertAdjacentElement("afterbegin",title_HD);
    heading_paper.setAttribute("class","heading_paper part_in_paper heading_paper_mau11"); 
    heading_paper.querySelectorAll(".information ul>li label:first-child>i").forEach(ele=>{
        ele.style.display = "block";
    })
    heading_paper.querySelectorAll(".information ul>li label:first-child>b").forEach(ele=>{
        ele.classList.add("hidden");
    })
        
        contentCV.removeAttribute("style");
        redistributeContent_2col(part_one);
        redistributeContent_2col(part_two); 

}
function Mau12(paper){
    xoa_ky_tu(paper);
    let introduce , title_HD , in4_individual;
    introduce = document.querySelector(".introduce") || "";
    title_HD = document.querySelector(".title_HD")|| "";
    in4_individual = introduce.querySelector(".information")|| ""; 
    title_cv = document.querySelectorAll(".title");
    let personalIn4 = paper.querySelector(".personal_in4");
    let heading_paper = paper.querySelector(".heading_paper") || "";
    let contentCV = paper.querySelector(".content_CV");
    let part_two = contentCV.querySelector(".half-right");
    
    paper.setAttribute("class","paper");
    title_in4.classList.add("bold","title" ,"possible_Part" ,"item_in_part");
    contentCV.classList.remove("part_two");
    heading_paper.classList.remove("part_one"); 
    if(paper.previousElementSibling){
        if(paper.previousElementSibling.classList.contains("paper")){
            heading_paper.style.display = "none";
            contentCV.style.padding = "24px 0";
        }
    }
    // handleErrorHD();
    heading_paper.classList.add("heading_paper_mau12");          
    paper.classList.add("paper_mau12");
    title_in4.style.display = "flex";
    Adjust_part_left(paper);
    let part_one = paper.querySelector(".half-left");
    if(in4_individual){
        in4_individual.classList.add("paragraph","part_ct","paragraph");
        in4_individual.querySelectorAll("li").forEach(li=>{
            li.classList.add("item_in_part");
        })
        in4_individual.insertAdjacentElement("afterbegin",title_in4);
        
        part_one.insertAdjacentElement("afterbegin",in4_individual);
        in4_individual.insertAdjacentElement("afterbegin",imgCV.parentElement);
        in4_individual.classList.add("information_mau12");
        heading_paper.insertAdjacentElement("beforeend",in4_individual);    
    }
    
    // Phần nửa bên trái
    part_one.classList.add("part_one");
    // part_one.style.width = "50%";
    part_one.style.height = "-1%";
    // part_two.style.width = "50%";
    part_two.classList.add("part_two");
    
    introduce.classList.add("ct_in_sectionSM");
    title_HD.classList.add("item_in_part");
    
    introduce.classList.remove("introduce_mau5","introduce_mau3");
    if(!document.querySelector(".half-left .workexperience")){
        part_one.insertAdjacentElement("afterbegin",document.querySelector(".workexperience"));
    }
    
    title_in4.classList.add("have_line");
    title_in4.style.display = "none";
    introduce.insertAdjacentElement("afterbegin",title_HD);
    heading_paper.querySelectorAll(".information ul>li label:first-child>i").forEach(ele=>{
        ele.style.display = "block";
    })
    heading_paper.querySelectorAll(".information ul>li label:first-child>b").forEach(ele=>{
        ele.classList.add("hidden");
    })
        
        contentCV.removeAttribute("style");
        redistributeContent_2col(part_one);
        redistributeContent_2col(part_two);
}
// Hàm Làm nhiệm vụ thêm ở giấy 1 - n mẫu của nó và chuyển hết phần tử vào phần content_cv 

list_cv.forEach(ele=>{
    ele.addEventListener("click",()=>{ // bất đồng bộ 
        is_default = true;
        let mauCV;
        let checkStyle;
        let papers = document.querySelectorAll(".paper");

        mauCV = ele.getAttribute("type_cv").split(" ")[0];
        checkStyle = mauCV.substring(3);
        console.log(mauCV);
        console.log("Màu Hiện Tại : ",currentColor);
        document.querySelector(".window_maucv").classList.add("hidden");
        switch(mauCV) {
            case "mau0":
                console.log("Số Giấy Hiện Tại :",papers);
                papers.forEach((paper,index)=>{                    
                    if(index == 0){
                        resetCV(paper);   
                    }
                    else{
                        Mau0(paper)   
                    }
                })             
                setColor_mauConlai();
                break;
            case "mau1":
                console.log("Số Giấy Hiện Tại :",papers);
                papers.forEach((paper,index)=>{
                    if(index == 0){
                        resetCV(paper);
                        Mau1(paper);   
                    }
                    else{
                        Mau1(paper);   
                    }
                })
                setColor_mauConlai();
                break;
            case "mau2":
                console.log("Số Giấy Hiện Tại :",papers);
                papers.forEach((paper,index)=>{
                    if(index == 0){
                        console.log(paper);
                        resetCV(paper);
                        Mau2(paper);  
                    }
                    else{
                        Mau2(paper);  
                    }
                })
                setColor_mau2();
                break;
            case "mau3":
                console.log("Số Giấy Hiện Tại :",papers);
                papers.forEach((paper,index)=>{
                    if(index == 0){
                        resetCV(paper);
                        Mau3(paper);  
                    }
                    else{
                        Mau3(paper);  
                    }
                })
                setColor_mau3();
                break;
            case "mau4":
                papers.forEach((paper,index)=>{
                    if(index == 0){
                        resetCV(paper);
                        Mau4(paper);  
                    }
                    else{
                        Mau4(paper);  
                    }
                })
                setColor_mauConlai();
                break;
            case "mau5":
                papers.forEach((paper,index)=>{
                    if(index == 0){
                        resetCV(paper);
                        Mau5(paper); 
                    }
                    else{
                        Mau5(paper); 
                    }
                })
                setColor_mau5();
                break;
            case "mau6":
                papers.forEach((paper,index)=>{
                    if(index == 0){
                        resetCV(paper);
                        Mau6(paper);
                    }
                    else{
                        Mau6(paper);
                    }
                })
                setColor_mauConlai();
                break;
            case "mau7":
                papers.forEach((paper,index)=>{
                    if(index == 0){
                        resetCV(paper);
                        Mau7(paper);
                    }
                    else{
                        Mau7(paper);
                    }
                })
                setColor_mau7();
                break;
            case "mau8":
                papers.forEach((paper,index)=>{
                    if(index == 0){
                        resetCV(paper);
                        Mau8(paper); 
                    }
                    else{
                        Mau8(paper); 
                    }
                })
                setColor_mau8();
                break;
            case "mau9":
                papers.forEach((paper,index)=>{
                    if(index == 0){
                        resetCV(paper);
                        Mau9(paper);
                    }
                    else{
                        Mau9(paper);
                    }
                })
                setColor_mau9_mau10();
                break;
            case "mau10":
                papers.forEach((paper,index)=>{
                    if(index == 0){
                        resetCV(paper);
                        Mau10(paper);
                    }
                    else{
                        Mau10(paper);
                    }
                })
                setColor_mau9_mau10();
                break;
            case "mau11":
                papers.forEach((paper,index)=>{
                    if(index == 0){
                        resetCV(paper);
                        Mau11(paper);
                    }
                    else{
                        Mau11(paper);
                    }
                })
                setColor_mauConlai();
                break;
            case "mau12":
                papers.forEach((paper,index)=>{
                    if(index == 0){
                        resetCV(paper);
                        Mau12(paper);
                    }
                    else{
                        Mau12(paper);
                    }
                })
                setColor_mauConlai();
                break;
            default:
                console.log("Mẫu Không Hợp Lệ !");
        }
        console.log("Mẫu CV thứ : ",checkStyle);
        CheckStyleCV(checkStyle);
        fixbug0103(); 
    });
}); 

function CheckStyleCV(res){
    let papers = document.querySelectorAll(".paper");

    if (window.observer1) {
        window.observer1.disconnect();
    }
    if (window.observer3) {
        window.observer3.disconnect();
    }
    // 
    let check_type_CV = (res == 0 || res == 2) ? "mau_1col" : "mau_2col";

    // console.log("check_type_CV : ",check_type_CV);
    // if(res == 0 || res == 2){
    //     papers.forEach(paper=>{
    //         paper.addEventListener('input',(event)=> {
    //             console.log(paper);
    //             redistributeContent_1col(paper);                      
    //         })
    //     })
    // }
    // else{
        
    // }
    const observer1 = new MutationObserver((mutations) => {
        console.log("res in CheckStyleCV : ",res);
        content_left.addEventListener('input', function(e) {
            const ele = e.target.closest(".item_in_part");
            if (!ele) return;
        
            if (res == 0 || res == 2) {
                redistributeContent_1col(ele.closest(".paper"));
            } else {
                const part = ele.closest(".half-left") || ele.closest(".half-right");
                if (part) {
                    redistributeContent_2col(part);
                }
            }
        });
        setTimeout(()=>{
            observer1.disconnect();
        },300)
    }); 

    window.observer1 = observer1;
    observer1.observe(content_left, { childList: true, subtree: true });
    // Tạo observer mới
    
    // Lưu observer vào window để có thể truy cập và hủy sau này  
    // Tương tự cho observer3
    const observer3 = new MutationObserver((mutations) => { // dùng để phát hiện thay đổi trong "content_left" 
    mutations.forEach((mutation) => {
    //   if (mutation.type === 'childList') {
        // Cập nhật lại NodeList khi có phần tử mới
        part_content = document.querySelectorAll('.content-left .paragraph');
        part_content.forEach(ele => {
            ele.addEventListener("click", function(event) {
                event.stopPropagation(); // ngăn chặn hành vi nổi bọt 
                editContent(ele,check_type_CV);
            });
        });
    //   }
        });

    });

    window.observer3 = observer3;
    observer3.observe(content_left, { childList: true, subtree: true });

    //Các phần code còn lại giữ nguyên
    part_content.forEach(ele => {
        ele.addEventListener("click", function(event) {
            event.stopPropagation();
            editContent(ele, check_type_CV);
        });
    });
    title_cv = document.querySelectorAll(".title");
    title_cv.forEach(function(ele){
        ele.addEventListener("click", function(event) {
            editContent(ele.closest(".part_ct"), check_type_CV);
        });
    });
}
document.addEventListener('click', function(event) {
    if (!event.target.closest('.part_ct')) {
        if (activeElement) {
            removeToolbars(activeElement);
            activeElement = null;
            activeToolbars = [];
        }
    }
});

// ------------------------------------------------------------------------------------------------------------
let check_c = 0;
btn_color_left.onclick = function(e){
    if(check_c < 1){
        btn_color_left.style.opacity = '0.4';
        e.preventDefault();
    }
    else{
        btn_color_right.style.opacity = '1';
        check_c--;
    }
    list_color.style.marginLeft = `-${check_c * khungnhin_c.offsetWidth}px`;
}

btn_color_right.onclick = function(e){
    if(check_c > colors.length - 2){
        btn_color_right.style.opacity = '0.4';
        e.preventDefault();
    }
    else{
        btn_color_left.style.opacity = '1';
        check_c++;
    }
    list_color.style.marginLeft = `-${check_c * khungnhin_c.offsetWidth}px`;
}

// đổi màu 
function check_type_CV_by_color(){
    let checkII = document.querySelectorAll(".paper");
    return checkII[0].getAttribute("class").split(" ")[1];
}

// các hàm lên màu cho các mẫu CV 
function setColor_mau2(get){
    if(get){
        currentColor = get;
    }
    listTitle = document.querySelectorAll(".content_CV .title");
    introduce = document.querySelector(".introduce");
    introduce.style.backgroundColor = "#fff";
    title_HD = document.querySelector(".title_HD");
    title_HD.style.color = currentColor;

    listTitle.forEach(elem=>{
        elem.style.opacity = '1';
        elem.style.backgroundColor = currentColor;
        elem.querySelector("p").style.color = "#fff";
    })

    title_HD.querySelector("section:first-child").style.backgroundColor = "#fff";    
    title_HD.querySelector("section:last-child").style.backgroundColor = "#fff";    
    title_HD.style.backgroundColor = "transparent";    
    Array.from(document.styleSheets[1].cssRules).forEach((cssele)=>{
        // console.log(cssele.cssText.split("::")); // nếu số lượng > 1 
        if(cssele.cssText.split("::").length > 1 ){
            if(cssele.cssText.includes("paper_mau2")){
                console.log(cssele); 
                cssele.style.backgroundColor = currentColor;
                if(cssele.cssText.includes("part_ct") || cssele.cssText.includes("after")){
                    cssele.style.borderLeftColor = currentColor; 
                }
            }
        }
    })
}
function setColor_mau3(get){
    if(get){
        currentColor = get;
    }
    listTitle = document.querySelectorAll(".title");
    introduce = document.querySelector(".introduce");
    title_HD = document.querySelector(".title_HD");
    title_HD.style.color = "#000";
    title_HD.querySelector("section:first-child").style.backgroundColor = "transparent";
    title_HD.querySelector("section:last-child").style.backgroundColor = "transparent";
    let heading_papers = document.querySelectorAll(".heading_paper");
    heading_papers.forEach(hd=>{
        hd.style.backgroundColor = currentColor;
        hd.style.opacity = "0.42";
    })
    listTitle.forEach((el)=>{
        el.style.backgroundColor = currentColor; 
        el.style.opacity = "0.42";
        el.querySelector("i").style.backgroundColor = currentColor;
        el.querySelector("p").style.backgroundColor = "transparent";
        el.querySelector("p").style.color = "#fff";
    })
    introduce.style.backgroundColor = currentColor;
    anh_CV.style.backgroundColor = "transparent";

    Array.from(document.styleSheets[1].cssRules).forEach((cssele)=>{
        if(cssele.cssText.split("::").length > 1 ){
            if(cssele.cssText.includes("introduce_mau3")){ 
                cssele.style.backgroundColor = currentColor;
            }
        }
    })
}
function setColor_mau5(get){
    if(get){
        currentColor = get;
    }
    listTitle = document.querySelectorAll(".title");
    introduce = document.querySelector(".introduce");
    title_HD = document.querySelector(".title_HD");
    heading_paper.style.backgroundColor = "#fff";
    introduce.style.backgroundColor = "#fff";
    title_HD.style.color = currentColor;
    title_HD.style.backgroundColor = "transparent";
    title_HD.querySelector("section:first-child").style.backgroundColor = "transparent";
    title_HD.querySelector("section:last-child").style.backgroundColor = "transparent";
    title_HD.querySelector("section:last-child").style.opacity = "1";


    listTitle.forEach((el)=>{
        el.style.opacity = '1';
        el.querySelector("p").style.color = currentColor;
        el.style.backgroundColor = "transparent";
        el.querySelector("p").style.backgroundColor = "transparent";

    })
}
function setColor_mau7(get){
    if(get){
        currentColor = get;
    }
    listTitle = document.querySelectorAll(".title");
    introduce = document.querySelector(".introduce");
    introduce.style.backgroundColor = "#e5e2e2";
    heading_paper.style.backgroundColor = "transparent";
    heading_paper.style.opacity = "1";
    title_HD.querySelector("section:first-child").style.backgroundColor = currentColor;
    title_HD.querySelector("section:last-child").style.backgroundColor = currentColor;
    title_HD.querySelector("section:last-child").style.opacity = "0.42";
    title_HD.style.backgroundColor = "transparent";
    title_HD.style.color = "#fff";
    
    anh_CV.style.backgroundColor = currentColor;
    listTitle.forEach((el)=>{
        el.querySelector("p").style.backgroundColor = currentColor;
        el.style.backgroundColor = "transparent";
        el.querySelector("p").style.color = "#fff";
        el.style.opacity = "1";
    })
}
function setColor_mau8(get){
    if(get){
        currentColor = get;
    }
    listTitle = document.querySelectorAll(".title");
    introduce = document.querySelector(".introduce");

    heading_paper.style.backgroundColor = "#e5e2e2";
    anh_CV.style.backgroundColor = "transparent";
    title_HD.style.backgroundColor = currentColor;
    title_HD.querySelector("section:last-child").style.opacity = "1";
    
    title_HD.querySelector("section:first-child").style.backgroundColor = "transparent";    
    title_HD.querySelector("section:last-child").style.backgroundColor = "transparent"; 

    title_HD.style.color = "#fff";

    introduce.style.backgroundColor = "transparent";
    listTitle.forEach(function(ele){
        ele.style.backgroundColor = currentColor;
        ele.querySelector("i").style.background = currentColor;
        ele.querySelector("p").removeAttribute("style");
        ele.querySelector("p").style.color = "#fff";
        ele.style.opacity = "1";
    })
}
function setColor_mau9_mau10(get){
    if(get){
        currentColor = get;
    }
    listTitle = document.querySelectorAll(".title");
    introduce = document.querySelector(".introduce");

    title_HD.style.backgroundColor = currentColor;
    title_HD.style.color = "#fff";

    title_HD.querySelector("section:first-child").style.backgroundColor = "transparent";
    title_HD.querySelector("section:last-child").style.backgroundColor = "transparent";

    title_HD.querySelector("section:last-child").style.opacity = "1";
    
    anh_CV.querySelector("img").style.border = `6px solid ${currentColor}`;
    listTitle.forEach(function(ele){
        ele.querySelector("p").style.color = currentColor;
        ele.style.backgroundColor = "transparent";
        ele.style.opacity = "1";
        ele.querySelector("p").style.backgroundColor = "transparent";
    })
    if(check_type_CV_by_color() == "paper_mau10"){
        document.querySelectorAll(".anh_CV").forEach(anhcv=>{
            anhcv.style.backgroundColor = currentColor;
        })
    }
    Array.from(document.styleSheets[1].cssRules).forEach((cssele)=>{
        if(cssele.cssText.split("::").length > 1 ){
            if(cssele.cssText.includes(`${check_type_CV_by_color()}`)){ 
                if(cssele.cssText.includes("after")){
                    cssele.style.borderBottomColor = currentColor; 
                }
            }
        }
    })  
    heading_paper.style.backgroundColor = "transparent";
    heading_paper.style.opacity = "1";
}
function setColor_mauConlai(get){ // mẫu 0 1 4 6 11 12
    if(get){
        currentColor = get;
    }
    let title_in_partCv = document.querySelectorAll('.item_in_part>i');
    title_HD = document.querySelector(".title_HD");
    listTitle = document.querySelectorAll(".title");
    introduce = document.querySelector(".introduce");
    introduce.style.backgroundColor = currentColor;
    title_HD.style.color = "#fff";
    let heading_papers = document.querySelectorAll(".heading_paper");

    title_HD.querySelector("section:first-child").style.backgroundColor = "transparent";
    title_HD.querySelector("section:last-child").style.backgroundColor = "transparent";
    title_HD.querySelector("section:last-child").style.opacity = "1";
    anh_CV.style.backgroundColor = "transparent";
    if(check_type_CV_by_color() == "paper_mau1"){
        title_HD.style.color = "#000";
        title_HD.style.backgroundColor = "transparent";
    }
    if(check_type_CV_by_color() == "paper_mau4"){
        title_HD.style.color = "#fff";
    }
    title_in_partCv.forEach(function(ele){
        ele.nextElementSibling.style.backgroundColor = "transparent";
        ele.nextElementSibling.style.color = currentColor;
        ele.style.backgroundColor = currentColor;
    })
    title_HD.removeAttribute("style");
    if(check_type_CV_by_color() == "paper_mau6"){
        anh_CV.querySelector("img").style.border = "initial";
    }
    listTitle.forEach(el=>{
        if(check_type_CV_by_color() == "paper_mau6"){
            el.querySelector("p").style.backgroundColor = "#fff";
        }
        el.style.backgroundColor = "transparent";
        if(check_type_CV_by_color() == "paper_mau1"){
            el.style.backgroundColor = "#fff";
        }

        el.style.opacity = '1';
        el.querySelector("p").style.backgroundColor = "transparent";
        el.querySelector("p").style.color = currentColor;

        if(el.querySelector(".icon_crystal")){
            el.querySelector(".icon_crystal").style.backgroundColor = currentColor;
        }
    })
    if(check_type_CV_by_color() == "paper_mau12"){
        anh_CV.querySelector("img").style.border = `4px solid ${currentColor}`;
    }
    Array.from(document.styleSheets[1].cssRules).forEach((cssele)=>{
        if(cssele.cssText.split("::").length > 1 ){
            if(cssele.cssText.includes("heading_paper_mau4")){ 
                if(cssele.cssText.includes("after")){
                    cssele.style.backgroundColor = currentColor; 
                }
            }
        }
    })
    
    heading_papers.forEach(hd=>{
        hd.style.backgroundColor = currentColor;
        hd.style.opacity = "1";
    })
}
let userIdnow = localStorage.getItem("userIdnow");
let colorCVnow; 
// async function checkCorlornow(){
//     if(localStorage.getItem("status") == "update"){
//         let urlCVdetail = `http://localhost:5028/api/NguoiDung/user/getDetailsCVbyID?userid=${userIdnow}&idcv=${localStorage.getItem("IDCVcurrent")}`;
//         let fet = await fetch(urlCVdetail)
//         colorrr = await fet.json();
//         return colorrr.color;
//     }
//     else{
//         return "rgb(252, 83, 83)";
//     }
// }
colorCVnow = "rgb(252, 83, 83)";
console.log(colorCVnow);
mausac.forEach(function(ele){
    ele.onclick = function(e){
        let title_in_partCv = document.querySelectorAll('.item_in_part>i');
        currentColor = e.target.style.background;

        // console.log(e.target.style.background);
        listTitle = document.querySelectorAll(".title");
        introduce = document.querySelector(".introduce");
        console.log(currentColor);
        colorCVnow = currentColor
        if(check_type_CV_by_color() == "paper_mau2"){
            // console.log(Array.from(document.styleSheets[1].cssRules));
            setColor_mau2();
        }
        else if(check_type_CV_by_color() == "paper_mau3"){
            setColor_mau3();
        }
        else if(check_type_CV_by_color() == "paper_mau5"){
            setColor_mau5();
        }
        else if(check_type_CV_by_color() == "paper_mau7"){
            setColor_mau7();
        }
        else if(check_type_CV_by_color() == "paper_mau8"){
            setColor_mau8();
        }
        else if(check_type_CV_by_color() == "paper_mau9" || check_type_CV_by_color() == "paper_mau10"){
            setColor_mau9_mau10();
        }
        else{
            setColor_mauConlai();
        }
    }
})

// Phần mẫu CV 
let btn_mcv_left = document.querySelector(".window_maucv button:first-child");
let btn_mcv_right = document.querySelector(".window_maucv button:last-child");
let khungnhin_m = document.querySelector(".khungnhin_m");

// Lỗi về phần tử và giấy khi input vào ptu
// Thêm khổ giấy bên heading để chứa part_ct

let check_m = 0;
btn_mcv_left.onclick = function(e){
    if(check_m < 1){
        btn_mcv_left.style.opacity = '0.4';
        e.preventDefault();
    }
    else{
        btn_mcv_right.style.opacity = '1';
        check_m--;
    }
    daianhcv.style.marginLeft = `-${check_m * khungnhin_m.offsetWidth}px`;
}

btn_mcv_right.onclick = function(e){
    if(check_m > colors.length){
        btn_mcv_right.style.opacity = '0.4';
        e.preventDefault();
    }
    else{
        btn_mcv_left.style.opacity = '1';
        check_m++;
    }
    daianhcv.style.marginLeft = `-${check_m * khungnhin_m.offsetWidth}px`;
}
// Phần ảnh hồ sơ

an_anh.onclick = function(){
    imgCV.classList.toggle("hidden");
    if(imgCV.classList.contains("hidden")){
        an_anh.innerHTML = `<i class="fa-solid fa-eye"></i>Hiện Ảnh`;
    }
    else an_anh.innerHTML = `<i class="fa-solid fa-eye-slash"></i>Ẩn Ảnh`;
    
}

// Phần upload ảnh 
let uploadIMG = document.querySelector('.uploadImg');
let choose_upLoad = document.querySelector('.choose_upload');
let window_Upload = document.querySelector('.func_uploadImg');
let vung_up_file = document.querySelector('.upload_file');
let btn_upFile = document.querySelector('.upload_file>button');
let upFile = document.querySelector('.upload_file>input');
let text_in_Area = document.querySelector('.upload_file>p:first-child');
let btnCancel_upLoad = document.querySelector('.func_uploadImg>div:last-child>button:last-child');
let btn_upLoad = document.querySelector('.func_uploadImg>div:last-child>button:first-child');
let btnCancel_cutimg = document.querySelector('.func_uploadImg>div.useWhencutImg>button:last-child');
let close_tab_utilities = document.querySelectorAll(".window>i");
const rules = ['image/jpeg','image/jpg','image/png'];

//
uploadIMG.onclick = function(){
    document.querySelector('.window_img').classList.add('hidden');
    choose_upLoad.classList.remove('hidden');
}
// close choose_upLoad
let list_btn_close = document.querySelectorAll('.choose_upload>i, .func_uploadImg>i,.close');
list_btn_close.forEach(function(ele){
    ele.onclick = function(e){
        e.target.parentNode.classList.add('hidden');
    }
})
// 
close_tab_utilities.forEach(e=>{
    e.onclick = ()=>{
        e.closest(".window").classList.add("hidden");
    }
})
let listbtnUpimg = document.querySelectorAll('.func_uploadImg>div:first-child>span');
// A - Chọn ảnh mặc định 
let img_default = document.querySelector('.img_default');
img_default.onclick = function(){
    imgCV.src = `./img/8a9d6e85a93b8b3a8002896da71882a3.jpg`;
    choose_upLoad.classList.add('hidden');
}
//
// B - Chọn ảnh do ng dùng ốp lên 
let img_select = document.querySelector('.img_select');

img_select.onclick = function(){
    listbtnUpimg[0].style.color = '#fe4079';
    listbtnUpimg[0].style.fontWeight = '600';
    window_Upload.classList.remove('hidden');
    choose_upLoad.classList.add('hidden');
}

btn_upFile.onclick = function(){
    upFile.click();
}

vung_up_file.addEventListener('dragover',(e)=>{
    e.preventDefault();
    text_in_Area.textContent = "Thả ảnh vào để tải lên";
    text_in_Area.style.color = "green";
})
vung_up_file.addEventListener('dragleave',(e)=>{
    e.preventDefault();
    text_in_Area.textContent = "Thả file để tải ảnh lên";
    text_in_Area.style.color = "black";
})
vung_up_file.addEventListener('drop',(e)=>{
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    ShowFile(file);
});

upFile.onchange = function(){
    const file = this.files[0];
    ShowFile(file);
}

let btn_useWhencutImg = document.querySelector('.useWhencutImg');
let btn_useWhenUpImg = document.querySelector('.useWhenUpImg');

function cutIMG(){
    listbtnUpimg[0].style.color = 'black';
    listbtnUpimg[0].style.fontWeight = '300';
    let imgCVnoww = document.querySelector(".anh_CV img");
    if(vung_up_file.childNodes[0].tagName == 'IMG'){
        btn_useWhencutImg.classList.remove('hidden');
        btn_useWhenUpImg.classList.add('hidden');
        let save_change = btn_useWhencutImg.querySelector('button:first-child');
        let img_Cut = vung_up_file.querySelector('img');
        let cropper;
            cropper = new Cropper(img_Cut,{
                sizeCut : 1,
            });
            save_change.addEventListener('click',()=>{
                let croppedIMG = cropper.getCroppedCanvas().toDataURL("image/png");
                // console.log(croppedIMG.toDataURL("image/png"));
                imgCV.src = croppedIMG;
                window_Upload.classList.add('hidden');
                vung_up_file.innerHTML = `<p> Thả file để tải ảnh lên</p>
                <p> hoặc</p>`;
                btn_useWhenUpImg.classList.remove('hidden');
                btn_useWhencutImg.classList.add('hidden');
                vung_up_file.append(btn_upFile);
            })
    }
    else{
        alert('Bạn Phải Tải Ảnh lên mới có thể cắt');
    }
}
// listbtnUpimg[1].onclick = cutIMG;
let btn_cutIMG = document.querySelector('.cutImg');
//--------------------------------------------------------------------------------
btn_cutIMG.onclick = ()=>{
    let imgCVnoww = document.querySelector(".anh_CV img");
    console.log(imgCVnoww.src);
    if(imgCVnoww.src == "http://127.0.0.1:5500/img/8a9d6e85a93b8b3a8002896da71882a3.jpg"){
        alert("Bạn Phải Tải Ảnh lên mới có thể cắt");
        return;
    }
    let save_change = btn_useWhencutImg.querySelector('button:first-child');
    btn_useWhencutImg.classList.remove('hidden');
    btn_useWhenUpImg.classList.add('hidden');
    window_Upload.classList.remove('hidden');
    document.querySelector('.window_img').classList.add('hidden');
    imgaTag = `<img style="width:240px;" src="${imgCVnoww.src}">`;
    vung_up_file.innerHTML = imgaTag;
    cropper = new Cropper(vung_up_file.querySelector("img"),{
        sizeCut : 1,
    });
    save_change.addEventListener('click',()=>{
        let croppedIMG = cropper.getCroppedCanvas().toDataURL("image/png");
        imgCV.src = croppedIMG;
        window_Upload.classList.add('hidden');
        vung_up_file.innerHTML = `<p> Thả file để tải ảnh lên</p>
        <p> hoặc</p>`;
        btn_useWhenUpImg.classList.remove('hidden');
        btn_useWhencutImg.classList.add('hidden');
        vung_up_file.append(btn_upFile);
    })
};
// console.log(upFile.value);
function ShowFile(file){
    console.log(file);
    const fileType = file.type;
    // console.log(file);
    const valid = ['image/jpeg','image/jpg','image/png'];
    if(valid.includes(fileType)){
        const fileReader = new FileReader();
        fileReader.onload = function(){
            const fileUrl = fileReader.result;
            let imgaTag;
            if(file.size < 80000){
                imgaTag = `<img style="width:240px;" src="${fileUrl}">`;
            }
            else{
                imgaTag = `<img style="width:30%;" src="${fileUrl}">`;
            }
            vung_up_file.innerHTML = imgaTag;
        }
        fileReader.readAsDataURL(file);
        listbtnUpimg[1].onclick = cutIMG;
    }
    else{
        alert("Đây không phải file ảnh !");
        text_in_Area.textContent = "Vui Lòng Kéo và Thả đúng ảnh để tải ảnh lên";
        text_in_Area.style.color = "red";
    }
}
btn_upLoad.onclick = function(){
    console.log(vung_up_file.childNodes[0]);
    // const in4id = 32; // ID bạn đang cố gắng thêm
    // const file = vung_up_file.childNodes[0].src;
    // if (!vung_up_file.childNodes[0]?.src) {
    //     alert('Bạn chưa tải ảnh lên!');
    //     return;
    // }
    // // Chuyển ảnh thành Blob
    // const blobImage = base64ToBlob1(vung_up_file.childNodes[0].src);
    // console.log("in4id:", in4id);
    // console.log("file:", file);
    // // Chuẩn bị dữ liệu gửi lên API
    // const formData = new FormData();
    // formData.append("in4id", in4id); // Giá trị in4id
    // formData.append("file", blobImage, "image.jpg"); // Ảnh dưới dạng blob
    // console.log("-----------------");
    // for (let pair of formData.entries()) {
    //     console.log(pair[0] + ": " + typeof pair[1]);
    // }
    // console.log(formData)
    // // Gửi request lên API
    // const url = "http://localhost:5028/api/NguoiDung/UploadImage";
    // fetch(url, {
    //     method: "POST",
    //     body: formData, // Sử dụng FormData thay vì JSON.stringify
    // })
    //     .then((res) => {
    //         if (!res.ok) throw new Error("Lỗi khi tải ảnh lên!");
    //         return res.json();
    //     })
    //     .then((data) => {
    //         console.log("Phản hồi từ API:", data);
    //     })
    //     .catch((err) => {
    //         console.error(err);
    //     });
    // console.log("AAAAAAAAAAAAA :", URL.createObjectURL(base64ToBlob1(vung_up_file.childNodes[0].src)));
    // console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBB :",URL.createObjectURL(base64ToBlob2(vung_up_file.childNodes[0].src)));
    if(vung_up_file.childNodes[0].src === undefined){
        alert('Bạn chưa tải ảnh lên !');
    }else{
        imgCV.src = vung_up_file.childNodes[0].src // ảnh CV được thay 
        vung_up_file.innerHTML = `<p> Thả file để tải ảnh lên</p>
                    <p> hoặc</p>`;
        vung_up_file.append(btn_upFile);
        window_Upload.classList.add('hidden');
    }
}
btnCancel_upLoad.onclick = function(){
    vung_up_file.innerHTML = `<p> Thả file để tải ảnh lên</p>
                    <p> hoặc</p>`;
    vung_up_file.append(btn_upFile);
}
btnCancel_cutimg.onclick = ()=>{
    vung_up_file.innerHTML = `<p> Thả file để tải ảnh lên</p>
                    <p> hoặc</p>`;
    vung_up_file.append(btn_upFile);
    window_Upload.classList.add("hidden");
    btn_useWhencutImg.classList.add("hidden");
    btn_useWhenUpImg.classList.remove("hidden");
}

let resize = document.querySelector(".resize");
let let_resize = document.querySelector(".let_resize");
let dieuchinh_anh = document.querySelector(".butt"); 
let slider = document.querySelector(".slider");
let btnReduce = document.querySelector(".let_resize>div:nth-child(2) button");
resize.onclick = function() {
    document.querySelector('.window_img').classList.add('hidden');
    let_resize.classList.remove("hidden");
}

let setcung = 120;
// tăng giảm by kéo
dieuchinh_anh.onmousedown = function(e) {
    let left_let_resize = let_resize.getBoundingClientRect().left;
    let padding_let_resize = window.getComputedStyle(let_resize);
    let btnReduce_width = btnReduce.offsetWidth;
    let margin_slider = window.getComputedStyle(slider).getPropertyValue("margin").split(" ");

    function dragBtn(e){
        dieuchinh_anh.style.left = e.pageX - left_let_resize - parseInt(padding_let_resize.getPropertyValue("padding")) - btnReduce_width - parseInt(margin_slider[1]) + "px";
        if(parseInt(dieuchinh_anh.style.left) < 5){
            dieuchinh_anh.style.left = '5px';
        }
        if(parseInt(dieuchinh_anh.style.left) > 114){
            dieuchinh_anh.style.left = '115px';
        }
        imgCV.style.width = (parseInt(window.getComputedStyle(dieuchinh_anh).getPropertyValue("left")) + 55) + "px";
        imgCV.style.height = (parseInt(window.getComputedStyle(dieuchinh_anh).getPropertyValue("left")) + 55) + "px";
        setcung = (parseInt(window.getComputedStyle(dieuchinh_anh).getPropertyValue("left")) + 55)
    }
    slider.addEventListener("mousemove",dragBtn);

    dieuchinh_anh.addEventListener("mouseup",function(e){
        slider.removeEventListener("mousemove",dragBtn);
        dieuchinh_anh.onmouseup = null;
    })
}
dieuchinh_anh.ondragstart = function() {
    return false;
};

// tăng giảm by nút 
let btn_giam_kt = document.querySelector(".giamkt");
let btn_tang_kt = document.querySelector(".tangkt");

btn_tang_kt.onclick = function(){
    let test = window.getComputedStyle(dieuchinh_anh);
    let count = 0;
    count ++;
    dieuchinh_anh.style.left = `${parseInt(test.getPropertyValue("left")) + count}px`;
    if(parseInt(dieuchinh_anh.style.left) > 114){
        dieuchinh_anh.style.left = '115px';
        count = 0;
    }
    // 
    img_CV.style.width = (parseInt(window.getComputedStyle(dieuchinh_anh).getPropertyValue("left")) + 55) + count + "px";
    setcung = (parseInt(window.getComputedStyle(dieuchinh_anh).getPropertyValue("left")) + 55) + count
btn_giam_kt.onclick = function(){
    let test = window.getComputedStyle(dieuchinh_anh);
    let count = 0;
    count ++;
    dieuchinh_anh.style.left = `${parseInt(test.getPropertyValue("left")) - count}px`;
    if(parseInt(dieuchinh_anh.style.left) < 5){
        dieuchinh_anh.style.left = '5px';
    }
    // 
    img_CV.style.width = (parseInt(window.getComputedStyle(dieuchinh_anh).getPropertyValue("left")) + 55) - count + "px";
    setcung = (parseInt(window.getComputedStyle(dieuchinh_anh).getPropertyValue("left")) + 55) - count 
    }
}
let cancel_resize = document.querySelector(".useWhenResize>button:last-child");
let save_resize = document.querySelector(".useWhenResize>button:first-child");

cancel_resize.onclick = function(){
    let_resize.classList.add("hidden");
    img_CV.style.width = "120px";
    dieuchinh_anh.style.left = "50%";
    dieuchinh_anh.style.transForm = "translateX(-50%)";
}
save_resize.onclick = function(){
    imgCV.style.width = `${setcung}px`;
    let_resize.classList.add("hidden");
}

// Chức năng tải xuống 
let downLoad_pdf = document.querySelector(".congcu2>ul>li:nth-child(1)");

function default_event(e){
    e.preventDefault();
}
let tagA_downl = document.querySelector(".congcu2>ul>li:nth-child(1)>a"); 
tagA_downl.addEventListener("click",default_event);
downLoad_pdf.onclick = function(){
    let yourCVs = document.querySelectorAll(".paper");
    let container = document.createElement("div");
    console.log(yourCVs);
    yourCVs.forEach(function(ele) {
        let clone = ele.cloneNode(true);
        container.appendChild(clone);
    });

    const options = {
        marginTop: 0,
        paddingTop : 0,
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    console.log(container);
    html2pdf().set(options).from(container).save();
}
let btnAIhelp = document.querySelector(".button_chatbot>a");
// Lấy API 
// Xây dựng 1 hàm để lấy ra tất cả nội dung của các phần trong toàn content-Left khi nhấn lưu 

function checkFatherPart(element,elementneibour){
    console.log(element);
    console.log(elementneibour);

    if(element.getAttribute("fatherpart") && elementneibour.getAttribute("fatherpart")){
        if(element.getAttribute("fatherpart") == elementneibour.getAttribute("fatherpart")){
            return true
        }
    }
    else return false;
}
let contentYourCv = {
    model : "",
    font : "",
    fontSize : "",
    color : "",
    uploadImg : "",
    userprofile : {
        name : "",
        position : "",
    },
    information : {
        phone : "",
        address : "",
        github : "",
        email : "",
        birth : "",
        imgSize : "",
        container : "",
        // lable
        phonelabel: "",
        addresslabel : "",
        githublabel : "",
        emaillabel: "",
        birthlabel: ""
    },
    overview : [
        // {
        //     content : "",
        //     container : ""
        // }
    ],
    workexperience : [
        // {
        //     time: "",
        //     company_name : "",
        //     position : "",
        //     content : "",container : ""
        // },
        // {
        //     time: "",
        //     company_name : "",
        //     position : "",
        //     content : "",container : ""
        // }
    ],
    education : [
        // {
        //     time: "",
        //     school_name : "",
        //     content : "",container : ""
        // },
    ],
    skill : [
        // {
        //     skill_name : "",
        //     content : "",container : ""
        // }
    ],
    project : [
        // {
        //     project_name : "",
        //     time : "",
        //     client : "",
        //     descriptions : "",
        //     number_of_members : "",
        //     position : "",
        //     responsibilities : "",
        //     technology_in_use : "",container : ""
        // }
    ],
    awards : [
        // {
        //     award_name : "",
        //     time : "",
        //     content : "",container : ""
        // } 
    ],
    goals : [
        // {
        //     term : "",
        //     content : "",container : ""
        // }
    ],
    language : [
        // {
        //     language_name : "",
        //     level : "",
        //     content : "",container : ""
        // }
    ],
    certificate : [
        // {
        //     time : "",
        //     content : "",container : ""
        // }
    ],
    another : [
        // {
        //     part_name : "",
        //     title : "",
        //     content : "",container : ""
        // }
    ],
}   

let currentURL = window.location.href;
let btn_save_yourCV = document.querySelector(".save_YourCv");
let btn_add_newCV = document.querySelector(".add_newCv");
console.log(currentURL);
console.log(readIDCVinURL(currentURL));
let IDCVwhenChoose = readIDCVinURL(currentURL);

if(readIDCVinURL(currentURL) == 0){
    localStorage.setItem("IDCVcurrent",undefined);
}
else{
    if(readIDCVinURL(currentURL) !== undefined){
        localStorage.setItem("IDCVcurrent",IDCVwhenChoose);
    }
}
console.log(userIdnow);
console.log("Idcv khi chọn ",IDCVwhenChoose);
console.log(localStorage.getItem("IDCVcurrent"));
function readIDCVinURL(url){
    let handle = String(url);
    let idcvNOW;
    for(let i = 0 ; i < handle.length ; i++){
        if(handle[i] == "?"){
            idcvNOW = handle.substring(i+1);
            return idcvNOW;
        }
    }
}
if(localStorage.getItem("IDCVcurrent") !== "undefined"){
    // IDCVwhenChoose = readIDCVinURL(currentURL);
    renderCVbyidcv(false);
}

async function AutoSaveCv(){
    contentYourCv = {
        model : "",
        font : "",
        fontSize : "",
        color : "",
        uploadImg : "",
        userprofile : {
            name : "",
            position : "",
        },
        information : {
            phone : "",
            address : "",
            github : "",
            email : "",
            birth : "",
            imgSize : "",
            container : "",
            // lable
            phonelabel: "",
            addresslabel : "",
            githublabel : "",
            emaillabel: "",
            birthlabel: ""
        },
        overview : [
            // {
            //     content : "",
            //     container : ""
            // }
        ],
        workexperience : [
            // {
            //     time: "",
            //     company_name : "",
            //     position : "",
            //     content : "",container : ""
            // },
            // {
            //     time: "",
            //     company_name : "",
            //     position : "",
            //     content : "",container : ""
            // }
        ],
        education : [
            // {
            //     time: "",
            //     school_name : "",
            //     content : "",container : ""
            // },
        ],
        skill : [
            // {
            //     skill_name : "",
            //     content : "",container : ""
            // }
        ],
        project : [
            // {
            //     project_name : "",
            //     time : "",
            //     client : "",
            //     descriptions : "",
            //     number_of_members : "",
            //     position : "",
            //     responsibilities : "",
            //     technology_in_use : "",container : ""
            // }
        ],
        awards : [
            // {
            //     award_name : "",
            //     time : "",
            //     content : "",container : ""
            // } 
        ],
        goals : [
            // {
            //     term : "",
            //     content : "",container : ""
            // }
        ],
        language : [
            // {
            //     language_name : "",
            //     level : "",
            //     content : "",container : ""
            // }
        ],
        certificate : [
            // {
            //     time : "",
            //     content : "",container : ""
            // }
        ],
        another : [
            // {
            //     part_name : "",
            //     title : "",
            //     content : "",container : ""
            // }
        ],
    }  
    if(IDCVwhenChoose == 0){
        await SaveyourCV(contentYourCv);
        console.warn("Sau ( mới )",contentYourCv)
        await getdatapushtoAPI(contentYourCv);
        let allCV = `http://localhost:5028/api/NguoiDung/AllCV_by_ID_user?userid=${userIdnow}`;
        let res = await fetch(allCV);
        let dat = await res.json();
        IDCVwhenChoose = dat[dat.length - 1].idcv;
        localStorage.setItem("IDCVcurrent", dat[dat.length - 1].idcv);
        console.log(localStorage.getItem("IDCVcurrent"));
    }
    else{
        if(localStorage.getItem("IDCVcurrent") !== "undefined"){
            console.warn("---- Trước",contentYourCv);
            await SaveyourCV(contentYourCv);
            console.warn("----- Sau",contentYourCv);
            console.log(localStorage.getItem("IDCVcurrent"));
            await updateCV(contentYourCv); // làm nhiệm vụ update 1 phần của CV ( ảnh , in4 )
            await Deletebe4Update(localStorage.getItem("IDCVcurrent")); // làm nhiệm vụ xóa phần còn lại của CV cũ 
            await addDatatoUpdate(contentYourCv,localStorage.getItem("IDCVcurrent")); // thêm mới nội dung mới vào phần còn lại vừa xóa 
        }
    }
}
localStorage.setItem("checkxemthemchua",false);
console.log(localStorage.getItem("checkxemthemchua"));

// 4,5s lưu CV 1 lần 
// setInterval(AutoSaveCv,4500);

function checkRepairCV(url){
    let checkURL = String(url);
    return isNaN(checkURL[checkURL.length - 1] + 1);
}
//---------------------------------------------------------------------------------------------------------
// renderCVbyidcv(checkRepairCV(currentURL));
function renderCVbyidcv(check){
    function ChooseTypeResdistribute(model){
        if(model == "paper_mau0" || model == "paper_mau2"){
            return "mau_1col";
        }
        else{
            return "mau_2col";
        }
    }
    if(!check){
        let idcv = localStorage.getItem("IDCVcurrent");
        let cvnow = `http://localhost:5028/api/NguoiDung/user/getDetailsCVbyID?userid=${userIdnow}&idcv=${idcv}`; 
        fetch(cvnow)
        .then(responsive=>{
            return responsive.json();
        })
        .then(dat=>{
            console.log(dat);
            fetch(`http://localhost:5028/api/NguoiDung/GetIMGbyin4ID?in4id=${dat.information.in4id}`)
            .then(resp=>{
                return resp.json();
            })
            .then(ulimg=>{
                content_left.querySelector(".anh_CV>img").src = `http://localhost:5028/UploadedImages/${ulimg.img}`;
            })
            .catch(error=>{
                content_left.querySelector(".anh_CV>img").src = `http://localhost:5028/UploadedImages/8a9d6e85a93b8b3a8002896da71882a3.jpg`;
            })
            // dat.modelCV
            let paperss = document.querySelectorAll(".paper");
            currentColor = dat.cv.color;
            console.log(dat.cv.modelCV);
            // dat.cv.color
            let papers = Array.from(content_left.querySelectorAll('.paper')); 
            papers.forEach(paper=>{
                paper.style.fontFamily = dat.cv.font;
                paper.style.fontSize = dat.cv.fontSize;
            })
            console.log(dat.cv.modelCV);
            let modelCVnow = ChooseTypeResdistribute(dat.cv.modelCV);
            console.log(modelCVnow);
            console.log("Màu Hiện Tại",currentColor);
            switch(dat.cv.modelCV){
                case "paper_mau0":
                    paperss.forEach((paper,index)=>{                    
                        if(index == 0){
                            resetCV(paper);   
                        }
                        else{
                            Mau0(paper);
                        }
                    })             
                    setColor_mauConlai(currentColor);
                    break;
                case "paper_mau1":
                    paperss.forEach((paper,index)=>{
                        if(index == 0){
                            resetCV(paper);
                            Mau1(paper);   
                        }
                        else{
                            Mau1(paper);   
                        }
                    })
                    setColor_mauConlai(currentColor);
                    break;
                case "paper_mau2":
                    paperss.forEach((paper,index)=>{
                        if(index == 0){
                            console.log(paper);
                            resetCV(paper);
                            Mau2(paper);  
                        }
                        else{
                            Mau2(paper);  
                        }
                    })
                    setColor_mau2(currentColor);                          
                    break;
                case "paper_mau3":
                    paperss.forEach((paper,index)=>{
                        if(index == 0){
                            resetCV(paper);
                            Mau3(paper);  
                        }
                        else{
                            Mau3(paper);  
                        }
                    })
                    setColor_mau3(currentColor);                              
                    break;
                case "paper_mau4":
                    paperss.forEach((paper,index)=>{
                        if(index == 0){
                            resetCV(paper);
                            Mau4(paper);  
                        }
                        else{
                            Mau4(paper);  
                        }
                    })
                    setColor_mauConlai(currentColor);                             
                    break;
                case "paper_mau5":
                    paperss.forEach((paper,index)=>{
                        if(index == 0){
                            resetCV(paper);
                            Mau5(paper); 
                        }
                        else{
                            Mau5(paper); 
                        }
                    })
                    setColor_mau5(currentColor);                              
                    break;
                case "paper_mau6":
                    paperss.forEach((paper,index)=>{
                        if(index == 0){
                            resetCV(paper);
                            Mau6(paper);
                        }
                        else{
                            Mau6(paper);
                        }
                    })
                    setColor_mauConlai(currentColor);                             
                    break;
                case "paper_mau7":
                    paperss.forEach((paper,index)=>{
                        if(index == 0){
                            resetCV(paper);
                            Mau7(paper);
                        }
                        else{
                            Mau7(paper);
                        }
                    })
                    setColor_mau7(currentColor);
                    break;
                case "paper_mau8":
                    paperss.forEach((paper,index)=>{
                        if(index == 0){
                            resetCV(paper);
                            Mau8(paper); 
                        }
                        else{
                            Mau8(paper); 
                        }
                    })
                    setColor_mau8(currentColor);
                    break
                case "paper_mau9":
                    paperss.forEach((paper,index)=>{
                        if(index == 0){
                            resetCV(paper);
                            Mau9(paper);
                        }
                        else{
                            Mau9(paper);
                        }
                    })
                    setColor_mau9_mau10(currentColor);
                    break;
                case "paper_mau10":
                    paperss.forEach((paper,index)=>{
                        if(index == 0){
                            resetCV(paper);
                            Mau10(paper);
                        }
                        else{
                            Mau10(paper);
                        }
                    })
                    setColor_mau9_mau10(currentColor);                           
                    break;
                case "paper_mau11":
                    paperss.forEach((paper,index)=>{
                        if(index == 0){
                            resetCV(paper);
                            Mau11(paper);
                        }
                        else{
                            Mau11(paper);
                        }
                    })
                    setColor_mauConlai(currentColor);
                    break;
                case "paper_mau12":
                    paperss.forEach((paper,index)=>{
                        if(index == 0){
                            resetCV(paper);
                            Mau12(paper);
                        }
                        else{
                            Mau12(paper);
                        }
                    })
                    setColor_mauConlai(currentColor);                           
                    break;
                default:
                    console.log("Mẫu Không Hợp Lệ");
            }
            // phần Profile (in4)
            content_left.querySelector("#name").innerText = dat.profile.fullname;
            antiEnter(content_left.querySelector("#name"));antiEnter(content_left.querySelector("#name"));
            content_left.querySelector("#position").innerText = dat.profile.position;
            antiEnter(content_left.querySelector("#position"));
            content_left.querySelector("#phone").innerText = dat.information.phone;
            antiEnter(content_left.querySelector("#phone"));
            content_left.querySelector("#address").innerText = dat.information.address;
            antiEnter(content_left.querySelector("#address"));
            content_left.querySelector("#birth").innerText = dat.information.birth;
            antiEnter(content_left.querySelector("#birth"));
            content_left.querySelector("#email").innerText = dat.information.email;
            antiEnter(content_left.querySelector("#email"));
            content_left.querySelector("#github").innerText = dat.information.github;
            antiEnter(content_left.querySelector("#github"));
            content_left.querySelector(".phonelable").innerText = dat.information.phonelabel;
            antiEnter(content_left.querySelector(".phonelable"));
            content_left.querySelector(".addresslable").innerText = dat.information.addresslabel;
            antiEnter(content_left.querySelector(".addresslable"));
            content_left.querySelector(".birthlable").innerText = dat.information.birthlabel;
            antiEnter(content_left.querySelector(".birthlable"));
            content_left.querySelector(".emaillable").innerText = dat.information.emaillabel;
            antiEnter(content_left.querySelector(".emaillable"));
            content_left.querySelector(".githublable").innerText = dat.information.githublabel;
            antiEnter(content_left.querySelector(".githublable"));
            content_left.querySelector(".anh_CV>img").style.height = dat.information.imgSize
            content_left.querySelector(".anh_CV>img").style.width = dat.information.imgSize

            let partSkill = document.createElement("section");
            let partProject = document.createElement("section");
            let partAwards = document.createElement("section");
            let partworkGoals = document.createElement("section");
            let partCertificate = document.createElement("section");
            let partLanguage = document.createElement("section");
            let partAnother = document.createElement("section");
            let partOverview = document.createElement("section");
            let partworkExp = document.createElement("section");
            let partEducation = document.createElement("section");
            
            let overView = content_left.querySelector(".overview");
            let education = content_left.querySelector(".education");
            let workEXP = content_left.querySelector(".workexperience");
            let skill = content_left.querySelector(".skill");
            let project = content_left.querySelector(".project");
            let award = content_left.querySelector(".awards");
            let goal = content_left.querySelector(".goals");
            let certificate = content_left.querySelector(".certificate");
            let language = content_left.querySelector(".language");
            let otherPart = content_left.querySelector(".another");

            // 
            partSkill.classList.add("skill");
            partSkill.classList.add("part_ct");
            partSkill.classList.add("paragraph");
            
            //
            partProject.classList.add("project");
            partProject.classList.add("part_ct");
            partProject.classList.add("paragraph");
            
            //
            partAwards.classList.add("awards");
            partAwards.classList.add("part_ct");
            partAwards.classList.add("paragraph");
            
            //
            partworkGoals.classList.add("goals");
            partworkGoals.classList.add("part_ct");
            partworkGoals.classList.add("paragraph");
            
            //
            partCertificate.classList.add("certificate");
            partCertificate.classList.add("part_ct");
            partCertificate.classList.add("paragraph");
            
            //
            partLanguage.classList.add("language");
            partLanguage.classList.add("part_ct");
            partLanguage.classList.add("paragraph");
            
            //
            partAnother.classList.add("another");
            partAnother.classList.add("part_ct");
            partAnother.classList.add("paragraph");
            
            //
            partOverview.classList.add("overview");
            partOverview.classList.add("part_ct");
            partOverview.classList.add("paragraph");
            
            //
            partworkExp.classList.add("workexperience");
            partworkExp.classList.add("part_ct");
            partworkExp.classList.add("paragraph");
            
            //
            partEducation.classList.add("education");
            partEducation.classList.add("part_ct");
            partEducation.classList.add("paragraph");
            
            let paper_ = document.querySelector(".paper");
            // kiểm tra nếu 
            if(dat.overviews.length > 0){
                if(!overView){
                    paper_.querySelector(`.${ele.container}`).insertAdjacentElement("beforeend",partOverview);
                    let div = document.createElement("section");
                    let ct_in_sectionSM = document.createElement("section");
                    let title_in_part = `<section class="bold title possible_Part item_in_part paragraph have_line">
                                    <i class="fa-solid fa-eye"></i>
                                    <p class="label_partCT">
                                        ${dat.overviews[0].name_title}
                                    </p>
                                </section>`
                    ct_in_sectionSM.classList.add("ct_in_sectionSM");
                    partOverview.innerHTML += title_in_part;
                    partOverview.appendChild(ct_in_sectionSM);
                    div.classList.add("content_in_CV","paragraph","item_in_part","possible_Part");
                    div.setAttribute("fatherpart","overview");
                    div.innerHTML = ele.contentOverView;
                    dat.overviews.forEach(ele=>{
                        partOverview.querySelector(".ct_in_sectionSM").insertAdjacentElement("beforeend",div);
                        editContent(div);
                        if(modelCVnow == "mau_1col"){
                            redistributeContent_when_Addele();
                        }
                        else{                
                            redistributeContent_when_Addele_2col(div.closest(`.${ele.container}`));
                        }
                    })
                }
                else{
                    overView.querySelector(".ct_in_sectionSM").innerHTML = "";
                    overView.querySelector(".label_partCT").innerText = dat.overviews[0].name_title
                    dat.overviews.forEach(ele=>{
                        let div = document.createElement("section");
                        div.classList.add("content_in_CV","paragraph","item_in_part","possible_Part");
                        div.setAttribute("fatherpart","overview");
                        div.innerHTML = ele.contentOverView;
                        console.log(dat.overviews);
                        overView.querySelector(".ct_in_sectionSM").insertAdjacentElement("beforeend",div);
                        editContent(div);
                        if(modelCVnow == "mau_1col"){
                            redistributeContent_when_Addele();
                        }
                        else{        
                            console.log(ele.container);       
                            redistributeContent_when_Addele_2col(div.closest(`.${ele.container}`));
                        }
                    })
                }
            }
            else{
                overView.remove();
            }
            if(dat.workExperiences.length > 0){
                if(!workEXP){
                    paper_.querySelector(`.${ele.container}`).insertAdjacentElement("beforeend",partworkExp);
                    let title_in_part = `<section class="bold title possible_Part item_in_part have_line">
                                    <i class="fa-solid fa-suitcase"></i>
                                    <p class="label_partCT">
                                        ${dat.workExperiences[0].name_title}
                                    </p>
                                </section>`
                    let ct_in_sectionSM = document.createElement("section");
                    ct_in_sectionSM.classList.add("ct_in_sectionSM");
                    partworkExp.innerHTML += title_in_part;
                    partworkExp.appendChild(ct_in_sectionSM);
                    dat.workExperiences.forEach(ele=>{
                        let part_of_workexperience = document.createElement("section");
                        part_of_workexperience.classList.add("content_in_CV","paragraph","item_in_part");
                        part_of_workexperience.setAttribute("fatherpart","workexperience");
                        let cont = `<section class="half_left_of_content_item bold possible_Part">
                                                <p class="timeline type_2">${ele.time}</p>
                                            </section>
                                            <section class="half_right_of_content_item project_ofPart">
                                                <section class="bold">
                                                    <p class="title_item type_2 possible_Part">${ele.company_name}</p>
                                                </section>
                                                <p class="description type_2 possible_Part">${ele.position}</p>
                                                <ul class="content_item type_2 possible_Part"> 
                                                    ${ele.content}
                                                </ul>
                                            </section>`
                        part_of_workexperience.innerHTML += cont
                        partworkExp.querySelector(".ct_in_sectionSM").insertAdjacentElement("beforeend",part_of_workexperience);
                        editContent(part_of_workexperience);

                        if(modelCVnow == "mau_1col"){
                            redistributeContent_when_Addele();
                        }
                        else{                  
                            redistributeContent_when_Addele_2col(div.closest(`${dat.workExperiences.container}`));
                        }
                    })
                }
                else{
                    workEXP.querySelector(".ct_in_sectionSM").innerHTML = "";
                    workEXP.querySelector(".label_partCT").innerText = dat.workExperiences[0].name_title
                    console.log(dat.workExperiences);
                    dat.workExperiences.forEach(ele=>{
                    let part_of_workexperience = document.createElement("section");
                    part_of_workexperience.classList.add("content_in_CV","paragraph","item_in_part");
                    part_of_workexperience.setAttribute("fatherpart","workexperience");
                    let cont = `<section class="half_left_of_content_item bold possible_Part">
                                                <p class="timeline type_2">${ele.time}</p>
                                            </section>
                                            <section class="half_right_of_content_item project_ofPart">
                                                <section class="bold">
                                                    <p class="title_item type_2 possible_Part">${ele.company_name}</p>
                                                </section>
                                                <p class="description type_2 possible_Part">${ele.position}</p>
                                                <ul class="content_item type_2 possible_Part"> 
                                                    ${ele.content}
                                                </ul>
                                            </section>`
                    part_of_workexperience.innerHTML += cont;

                    workEXP.querySelector(".ct_in_sectionSM").insertAdjacentElement("beforeend",part_of_workexperience);
                    editContent(part_of_workexperience);
                    if(modelCVnow == "mau_1col"){
                        redistributeContent_when_Addele();
                    }
                    else{                  
                        redistributeContent_when_Addele_2col(part_of_workexperience.closest(`.${ele.container}`));
                    }
                })
                }
            }
            else{
                workEXP.remove();
            }
            if(dat.educations.length > 0){
                if(!education){
                    paper_.querySelector(`.${ele.container}`).insertAdjacentElement("beforeend",partEducation);
                    title_in_part = `<section class="bold title possible_Part item_in_part have_line">
                                    <i class="fa-solid fa-graduation-cap"></i>
                                    <p class="label_partCT">
                                        ${dat.educations[0].name_title}
                                    </p>
                                </section>`
                    let ct_in_sectionSM = document.createElement("section");
                    ct_in_sectionSM.classList.add("ct_in_sectionSM");
                    partEducation.appendChild(title_in_part);
                    partEducation.appendChild(ct_in_sectionSM);
                    dat.educations.forEach(ele=>{
                        let part_of_educations = document.createElement("section");
                        part_of_educations.classList.add("content_in_CV","paragraph","item_in_part");
                        part_of_educations.setAttribute("fatherpart","education");
                        let cont = `<section class="half_left_of_content_item bold possible_Part">
                                                <p class="timeline type_2">${ele.time}</p>
                                            </section>
                                            <section class="half_right_of_content_item study_place">
                                            <section class="bold possible_Part">
                                                <p class="title_item type_2">${ele.school_name}</p>
                                            </section>
                                            <ul class="content_item type_2 possible_Part"> 
                                                ${ele.content}
                                            </ul>
                                        </section>`
                        part_of_educations.innerHTML += cont;
                        partEducation.querySelector(".ct_in_sectionSM").insertAdjacentElement("beforeend",part_of_educations);
                        editContent(part_of_educations);

                        if(modelCVnow == "mau_1col"){
                            redistributeContent_when_Addele();
                        }
                        else{                  
                            redistributeContent_when_Addele_2col(part_of_educations.closest(`.${ele.container}`));
                        }
                    })
                }
                else{
                    education.querySelector(".ct_in_sectionSM").innerHTML = "";
                    education.querySelector(".label_partCT").innerText = dat.educations[0].name_title
                    dat.educations.forEach(ele=>{
                        let part_of_educations = document.createElement("section");
                        part_of_educations.classList.add("content_in_CV","paragraph","item_in_part");
                        part_of_educations.setAttribute("fatherpart","education");
                        let cont = `<section class="half_left_of_content_item bold possible_Part">
                                                    <p class="timeline type_2">${ele.time}</p>
                                                </section>
                                                <section class="half_right_of_content_item study_place">
                                                <section class="bold possible_Part">
                                                    <p class="title_item type_2">${ele.school_name}</p>
                                                </section>
                                                <ul class="content_item type_2 possible_Part"> 
                                                    ${ele.content}
                                                </ul>
                                            </section>`
                        part_of_educations.innerHTML += cont; 
                        education.querySelector(".ct_in_sectionSM").insertAdjacentElement("beforeend",part_of_educations);
                        editContent(part_of_educations);

                        if(modelCVnow == "mau_1col"){
                            redistributeContent_when_Addele();
                        }
                        else{                  
                            redistributeContent_when_Addele_2col(part_of_educations.closest(`.${ele.container}`));
                        }
                    })
                }
            }
            else{
                education.remove();
            }
            // ------------------------------------------------- SKILL 
            if(dat.skills.length > 0){
                if(!skill){
                    console.log(dat.skills);
                    paper_.querySelector(`.${dat.skills[0].container}`).insertAdjacentElement("beforeend",partSkill);
                    title_in_part = `<section class="bold title possible_Part item_in_part">
                                <i class="fa-solid fa-graduation-cap"></i>
                                <p class="label_partCT">
                                    ${dat.skills[0].name_title}
                                </p>
                            </section>`
                    let ct_in_sectionSM = document.createElement("section");
                    ct_in_sectionSM.classList.add("ct_in_sectionSM");
                    partSkill.innerHTML += title_in_part;
                    partSkill.appendChild(ct_in_sectionSM);
                    dat.skills.forEach(ele=>{
                        let part_of_skill = document.createElement("section");
                        part_of_skill.classList.add("content_in_CV","paragraph","item_in_part");
                        part_of_skill.setAttribute("fatherpart","skill");
                        let cont = `<section class="half_left_of_content_item possible_Part">
                                        <p class="timeline type_2">${ele.skill_name}</p>
                                    </section>
                                    <section class="half_right_of_content_item project_ofPart">
                                        <ul class="content_item type_2 possible_Part"> 

                                            ${ele.content}
                                        </ul>
                                    </section>`
                        part_of_skill.innerHTML += cont;
                        partSkill.querySelector(".ct_in_sectionSM").insertAdjacentElement("beforeend",part_of_skill);
                        editContent(part_of_skill);

                        if(modelCVnow == "mau_1col"){
                            redistributeContent_when_Addele();
                        }
                        else{                  
                            redistributeContent_when_Addele_2col(part_of_skill.closest(`.${ele.container}`));
                        }
                    })
                }
                else{
                    skill.querySelector(".ct_in_sectionSM").innerHTML = "";
                    dat.skills.forEach(ele=>{
                        let part_of_skill = document.createElement("section");
                        part_of_skill.classList.add("content_in_CV","paragraph","item_in_part");
                        part_of_skill.setAttribute("fatherpart","skill");
                        let cont = `<section class="half_left_of_content_item possible_Part">
                                                <p class="timeline type_2">${ele.skill_name}</p>
                                            </section>
                                            <section class="half_right_of_content_item project_ofPart">
                                                <ul class="content_item type_2 possible_Part"> 
                                                    ${ele.content}
                                                </ul>
                                                </section>`
                        part_of_skill.innerHTML += cont
                        skill.querySelector(".ct_in_sectionSM").insertAdjacentElement("beforeend",part_of_skill);
                        editContent(part_of_skill);

                        if(modelCVnow == "mau_1col"){
                            redistributeContent_when_Addele();
                        }
                        else{                  
                            redistributeContent_when_Addele_2col(part_of_skill.closest(`.${ele.container}`));
                        }
                    })
                }
            }
            // ----------------------------------------------------Project 
            if(dat.projects.length > 0){
                if(!project){
                    paper_.querySelector(`.${dat.projects[0].container}`).insertAdjacentElement("beforeend",partProject);
                    title_in_part = `<section class="bold item_in_part possible_Part title">
                                <i class="fa-solid fa-graduation-cap"></i>
                                <p class="label_partCT">
                                    ${dat.projects[0].name_title}
                                </p>
                            </section>`
                    let ct_in_sectionSM = document.createElement("section");
                    ct_in_sectionSM.classList.add("ct_in_sectionSM");
                    partProject.innerHTML += title_in_part;
                    partProject.appendChild(ct_in_sectionSM);

                    dat.projects.forEach(ele=>{
                        let part_of_project = document.createElement("section");
                        part_of_project.classList.add("content_in_CV","paragraph","item_in_part");
                        part_of_project.setAttribute("fatherpart","project");
                        let cont = `<section class="name_project">
                                        <b class="type_3 possible_Part">${ele.project_name}</b>
                                        <p class="type_3 possible_Part">${ele.time}</p>
                                    </section>
    
                                    <section>
                                        <table>
                                                <tr class="content_in_CV">
                                                <td class="half_left_of_content_item">
                                                    <div class="client_project_lable type_3 possible_Part">
                                                        <b > ${ele.client_lable} </b>
                                                    
                                                    </div>
                                                </td>
                                                <td class="half_right_of_content_item">
                                                    <div class="client_project type_3 possible_Part">
                                                        <p > ${ele.client} </p>
                                                    
                                                    </div>
                                                </td>
                                                </tr>
                                                <tr class="content_in_CV">
                                                <td class="half_left_of_content_item">
                                                    <div class="descriptions_project_lable type_3 possible_Part">
                                                        <b > ${ele.des_lable} </b>
                                                    
                                                    </div>
                                                </td>
                                                <td class="half_right_of_content_item">
                                                    <div class="descriptions_project type_3 possible_Part">
                                                        <p > ${ele.descriptions} </p>
                                                    
                                                    </div>
                                                </td>
                                                </tr>
                                                <tr class="content_in_CV">
                                                    <td class="half_left_of_content_item">
                                                        <div class="number_of_members_project_lable type_3 possible_Part">
                                                            <b > ${ele.nom_lable} </b>
                                                        
                                                        </div>
                                                    </td>
                                                    <td class="half_right_of_content_item">
                                                        <div class="number_of_members_project type_3 possible_Part">
                                                            <p > ${ele.number_of_members} </p>
                                                        </div>
                                                    </td>
                                                </tr>
                                                        <tr class="content_in_CV">
                                                        <td class="half_left_of_content_item">
                                                        <div class="position_project_lable type_3 possible_Part">
                                                            <b >${ele.pos_lable}</b>
                                                        
                                                        </div>
                                                        </td>
                                                        <td class="half_right_of_content_item">
                                                        <div class="position_project type_3 possible_Part">
                                                            <p > ${ele.position} </p>
                                                        
                                                        </div>
                                                        </td>
                                                        </tr>
                                                        <tr class="content_in_CV">
                                                        <td class="half_left_of_content_item">
                                                        <div class="responsibilities_project_lable type_3 possible_Part">
                                                            <b >${ele.respon_lable}</b>
                                                        
                                                        </div>
                                                        </td>
                                                        <td class="half_right_of_content_item">
                                                        <div class="responsibilities_project type_3 possible_Part">
                                                            <p > ${ele.responsibilities}</p>
                                                        
                                                        </div>
                                                        </td>
                                                        </tr>
                                                        <tr class="content_in_CV">
                                                        <td class="half_left_of_content_item">
                                                        <div class="technology_in_use_project_lable type_3 possible_Part">
                                                            <b >${ele.techuse_lable}</b>
                                                        
                                                        </div>
                                                        </td>
                                                        <td class="half_right_of_content_item">
                                                        <div class="technology_in_use_project type_3 possible_Part">
                                                            <p >${ele.technology_in_use} </p>
                                                        
                                                        </div>
                                                        </td>
                                                        </tr>
                                                        </table>
                                                    </section>`
                        part_of_project.innerHTML += cont; 
                        partProject.querySelector(".ct_in_sectionSM").insertAdjacentElement("beforeend",part_of_project);
                        editContent(part_of_project);

                        if(modelCVnow == "mau_1col"){
                            redistributeContent_when_Addele();
                        }
                        else{                  
                            redistributeContent_when_Addele_2col(part_of_project.closest(`.${ele.container}`));
                        }
                    })                          
                } 
                else{
                    console.log(project);
                    project.querySelector(".ct_in_sectionSM").innerHTML = "";
                    dat.projects.forEach(ele=>{
                        let part_of_project = document.createElement("section");
                        part_of_project.classList.add("content_in_CV","paragraph","item_in_part");
                        part_of_project.setAttribute("fatherpart","project");
                        let cont = `<section class="name_project">
                                            <b class="type_3 possible_Part">${ele.project_name}</b>
                                            <p class="type_3 possible_Part">${ele.time}</p>
                                        </section>
        
                                        <section>
                                            <table>
                                                <tr class="content_in_CV">
                                                <td class="half_left_of_content_item">
                                                    <div class="client_project_lable type_3 possible_Part">
                                                        <b > ${ele.client_lable} </b>
                                                    
                                                    </div>
                                                </td>
                                                <td class="half_right_of_content_item">
                                                    <div class="client_project type_3 possible_Part">
                                                        <p > ${ele.client} </p>
                                                    
                                                    </div>
                                                </td>
                                                </tr>
                                                <tr class="content_in_CV">
                                                <td class="half_left_of_content_item">
                                                    <div class="descriptions_project_lable type_3 possible_Part">
                                                        <b > ${ele.des_lable} </b>
                                                    
                                                    </div>
                                                </td>
                                                <td class="half_right_of_content_item">
                                                    <div class="descriptions_project type_3 possible_Part">
                                                        <p > ${ele.descriptions} </p>
                                                    
                                                    </div>
                                                </td>
                                                </tr>
                                                <tr class="content_in_CV">
                                                <td class="half_left_of_content_item">
                                                        <div class="number_of_members_project_lable type_3 possible_Part">
                                                            <b > ${ele.nom_lable} </b>
                                                        
                                                        </div>
                                                    </td>
                                                    <td class="half_right_of_content_item">
                                                        <div class="number_of_members_project type_3 possible_Part">
                                                            <p > ${ele.number_of_members} </p>
                                                        
                                                        </div>
                                                        </td>
                                                        </tr>
                                                        <tr class="content_in_CV">
                                                        <td class="half_left_of_content_item">
                                                        <div class="position_project_lable type_3 possible_Part">
                                                            <b >${ele.pos_lable}</b>
                                                        
                                                        </div>
                                                        </td>
                                                        <td class="half_right_of_content_item">
                                                        <div class="position_project type_3 possible_Part">
                                                            <p > ${ele.position} </p>
                                                        
                                                        </div>
                                                        </td>
                                                        </tr>
                                                        <tr class="content_in_CV">
                                                        <td class="half_left_of_content_item">
                                                        <div class="responsibilities_project_lable type_3 possible_Part">
                                                            <b >${ele.respon_lable}</b>
                                                        
                                                        </div>
                                                        </td>
                                                        <td class="half_right_of_content_item">
                                                        <div class="responsibilities_project type_3 possible_Part">
                                                            <p > ${ele.responsibilities}</p>
                                                        
                                                        </div>
                                                        </td>
                                                        </tr>
                                                        <tr class="content_in_CV">
                                                        <td class="half_left_of_content_item">
                                                        <div class="technology_in_use_project_lable type_3 possible_Part">
                                                            <b >${ele.techuse_lable}</b>
                                                        
                                                        </div>
                                                        </td>
                                                        <td class="half_right_of_content_item">
                                                        <div class="technology_in_use_project type_3 possible_Part">
                                                            <p >${ele.technology_in_use} </p>
                                                        
                                                        </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </section>`
                        part_of_project.innerHTML += cont; 
                        project.querySelector(".ct_in_sectionSM").insertAdjacentElement("beforeend",part_of_project);
                        editContent(part_of_project);

                        if(modelCVnow == "mau_1col"){
                            redistributeContent_when_Addele();
                        }
                        else{                  
                            redistributeContent_when_Addele_2col(part_of_project.closest(`.${ele.container}`));
                        }
                    })
                }
            }
            if(dat.awards.length > 0){
                if(!award){
                    paper_.querySelector(`.${dat.awards[0].container}`).insertAdjacentElement("beforeend",partAwards);
                    title_in_part = `<section class="bold item_in_part possible_Part title">
                                <i class="fa-solid fa-graduation-cap"></i>
                                <p class="label_partCT">
                                    ${dat.awards[0].name_title}
                                </p>
                            </section>`
                    let ct_in_sectionSM = document.createElement("section");
                    ct_in_sectionSM.classList.add("ct_in_sectionSM");
                    partAwards.innerHTML += title_in_part;
                    partAwards.appendChild(ct_in_sectionSM);
                    dat.awards.forEach(ele=>{
                        let part_of_Awards = document.createElement("section");
                        part_of_Awards.classList.add("content_in_CV","paragraph","item_in_part");
                        part_of_Awards.setAttribute("fatherpart","awards");
                        let cont = `<section class="half_left_of_content_item bold possible_Part">
                                            <p class="timeline type_2">${ele.time}</p>
                                        </section>
                                        <section class="half_right_of_content_item my_award projectcv">
                                            <section class="bold possible_Part title_item">
                                                <p class="type_2">${ele.award_name}</p>
                                            </section>
                                            <section class="content_item">
                                                ${ele.content}
                                            </section>
                                        </section>`
                        part_of_Awards.innerHTML += cont;
                        partAwards.querySelector(".ct_in_sectionSM").insertAdjacentElement("beforeend",part_of_Awards);
                        editContent(part_of_Awards);

                        if(modelCVnow == "mau_1col"){
                            redistributeContent_when_Addele();
                        }
                        else{                  
                            redistributeContent_when_Addele_2col(part_of_Awards.closest(`.${ele.container}`));
                        }
                    })
                }
                else{
                    dat.awards.forEach(ele=>{
                        let part_of_Awards = document.createElement("section");
                            part_of_Awards.classList.add("content_in_CV","paragraph","item_in_part");
                            part_of_Awards.setAttribute("fatherpart","awards");
                        let cont = `<section class="half_left_of_content_item bold possible_Part">
                                        <p class="timeline type_2">${ele.time}</p>
                                        </section>
                                        <section class="half_right_of_content_item my_award projectcv">
                                        <section class="bold possible_Part">
                                        <p class="title_item type_2">${ele.award_name}</p>
                                        </section>
                                        <section class="content_item">
                                            ${ele.content}
                                            </section>
                                            </section>`
                        part_of_Awards.innerHTML += cont;
                        console.log(award);
                        award.querySelector(".ct_in_sectionSM").insertAdjacentElement("beforeend",part_of_Awards);
                        editContent(part_of_Awards);

                        if(modelCVnow == "mau_1col"){
                            redistributeContent_when_Addele();
                        }
                        else{                  
                            redistributeContent_when_Addele_2col(part_of_Awards.closest(`.${ele.container}`));
                        }
                    })
                }
            }
            if(dat.goals.length > 0){
                if(!goal){
                    paper_.querySelector(`.${dat.goals[0].container}`).insertAdjacentElement("beforeend",partworkGoals);
                    title_in_part = `<section class="bold item_in_part possible_Part title">
                                <i class="fa-solid fa-graduation-cap"></i>
                                <p class="label_partCT">
                                    ${dat.goals[0].name_title}
                                </p>
                    </section>`
                    let ct_in_sectionSM = document.createElement("section");
                    ct_in_sectionSM.classList.add("ct_in_sectionSM");
                    partworkGoals.innerHTML += title_in_part;
                    partworkGoals.appendChild(ct_in_sectionSM);
                    dat.goals.forEach(ele=>{
                        let part_of_goals = document.createElement("section");
                        part_of_goals.classList.add("content_in_CV","paragraph","item_in_part");
                        part_of_goals.setAttribute("fatherpart","goals");
                        let cont = `<section class="half_left_of_content_item bold">
                                    <p class="timeline type_2 possible_Part">${ele.term}</p>
                                    </section>
                                    <section class="half_right_of_content_item my_award project">
                                    <section class="content_item">
                                    ${ele.content}
                                    </section>
                                    </section>`
                        part_of_goals.innerHTML += cont;
                        partworkGoals.querySelector(".ct_in_sectionSM").insertAdjacentElement("beforeend",part_of_goals);
                        editContent(part_of_goals);

                        if(modelCVnow == "mau_1col"){
                            redistributeContent_when_Addele();
                        }
                        else{                  
                            redistributeContent_when_Addele_2col(part_of_goals.closest(`.${ele.container}`));
                        }
                    })                  
                }
                else{
                    dat.goals.forEach(ele=>{
                        let part_of_goals = document.createElement("section");
                            part_of_goals.classList.add("content_in_CV","paragraph","item_in_part");
                            part_of_goals.setAttribute("fatherpart","goals");
                            let cont = `<section class="half_left_of_content_item bold">
                                        <p class="timeline type_2 possible_Part">${ele.term}</p>
                                        </section>
                                        <section class="half_right_of_content_item my_award project">
                                        <section class="content_item">
                                            ${ele.content}
                                        </section>
                                        </section>`
                            part_of_goals.innerHTML += cont;
                            goal.querySelector(".ct_in_sectionSM").insertAdjacentElement("beforeend",part_of_goals);
                            editContent(part_of_goals);

                            if(modelCVnow == "mau_1col"){
                                redistributeContent_when_Addele();
                            }
                            else{                  
                                redistributeContent_when_Addele_2col(part_of_goals.closest(`.${ele.container}`));
                            }
                    })      
                }     
            }
            if(dat.certificates.length > 0){
                if(!certificate){
                    paper_.querySelector(`.${dat.certificates[0].container}`).insertAdjacentElement("beforeend",partCertificate);
                    title_in_part = `<section class="bold item_in_part possible_Part title">
                                <i class="fa-solid fa-graduation-cap"></i>
                                <p class="label_partCT">
                                    ${dat.certificates[0].name_title}

                                </p>
                            </section>`
                    let ct_in_sectionSM = document.createElement("section");
                    ct_in_sectionSM.classList.add("ct_in_sectionSM");
                    partCertificate.innerHTML = title_in_part;
                    partCertificate.appendChild(ct_in_sectionSM);
                    dat.certificates.forEach(ele=>{
                        let part_of_certificate = document.createElement("section");
                        part_of_certificate.classList.add("content_in_CV","paragraph","item_in_part");
                        part_of_certificate.setAttribute("fatherpart","certificate");
                        let cont = `<section class="half_left_of_content_item bold">
                                        <p class="timeline type_2 possible_Part">${ele.time}</p>
                                    </section>
                                    <section class="half_right_of_content_item my_award project">
                                            <section class="content_item">
                                            ${ele.content}
                                            </section>
                                    </section>`
                        part_of_certificate.innerHTML += cont;
                        partCertificate.querySelector(".ct_in_sectionSM").insertAdjacentElement("beforeend",part_of_certificate);
                        editContent(part_of_certificate);

                        if(modelCVnow == "mau_1col"){
                            redistributeContent_when_Addele();
                        }
                        else{              
                            console.log(ele.container);
                            console.log(part_of_certificate);
                            redistributeContent_when_Addele_2col(part_of_certificate.closest(`.${ele.container}`));
                        }
                    })
                }
                else{
                    dat.certificates.forEach(ele=>{
                            let part_of_certificate = document.createElement("section");
                            part_of_certificate.classList.add("content_in_CV","paragraph","item_in_part");
                            part_of_certificate.setAttribute("fatherpart","certificate");
                            let cont = `<section class="half_left_of_content_item bold">
                                            <p class="timeline type_2 possible_Part">${ele.time}</p>
                                        </section>
                                        <section class="half_right_of_content_item my_award project">
                                            <section class="content_item">
                                            ${ele.content}
                                            </section>
                                        </section>`
                            part_of_certificate.innerHTML += cont;
                            certificate.querySelector(".ct_in_sectionSM").insertAdjacentElement("beforeend",part_of_certificate);
                            editContent(part_of_certificate);

                            if(modelCVnow == "mau_1col"){
                                redistributeContent_when_Addele();
                            }
                            else{                  
                                redistributeContent_when_Addele_2col(part_of_certificate.closest(`.${ele.container}`));
                            }
                        })
                }
            }
            // Chú ý mẫu này để rút kinh nghiệm và sửa những mẫu sau 
            if(dat.languages.length > 0){
                if(!language){
                    console.log("Vô đây");
                    paper_.querySelector(`.${dat.languages[0].container}`).insertAdjacentElement("beforeend",partLanguage);
                    title_in_part = `<section class="bold item_in_part possible_Part title">
                                <i class="fa-solid fa-graduation-cap"></i>
                                <p class="label_partCT">
                                    ${dat.languages[0].name_title}
                                </p>
                            </section>`
                    let ct_in_sectionSM = document.createElement("section");
                    ct_in_sectionSM.classList.add("ct_in_sectionSM");
                    partLanguage.innerHTML = title_in_part;
                    partLanguage.appendChild(ct_in_sectionSM);
                    dat.languages.forEach(ele=>{
                        let part_of_language = document.createElement("section");
                        part_of_language.classList.add("content_in_CV","paragraph","item_in_part");
                        part_of_language.setAttribute("fatherpart","language");
                        let cont = `<section class="half_left_of_content_item bold">
                                        <p class="timeline type_2 possible_Part">${ele.language_name}</p>
                                    </section>
                                    <section class="half_right_of_content_item my_award project">
                                        <section class="type_2 possible_Part title_item">
                                            <b class="" >${ele.level}</b>
                                        </section>
                                        <section class="content_item">
                                                ${ele.content}
                                        </section>
                                    </section>`
                        part_of_language.innerHTML += cont;
                        partLanguage.querySelector(".ct_in_sectionSM").insertAdjacentElement("beforeend",part_of_language);
                        editContent(part_of_language);

                        console.log(part_of_language);
                        // console.log()
                        if(modelCVnow == "mau_1col"){                          
                            redistributeContent_when_Addele();
                        }
                        else{                 
                            console.log(ele.container); 
                            redistributeContent_when_Addele_2col(part_of_language.closest(`.${ele.container}`));
                        }
                    })
                }
                else{
                    console.log(language);  
                    language.querySelector(".ct_in_sectionSM").innerHTML = "";
                    dat.languages.forEach(ele=>{
                    let part_of_language = document.createElement("section");
                    part_of_language.classList.add("content_in_CV","paragraph","item_in_part");
                    part_of_language.setAttribute("fatherpart","language");
                    let cont = `<section class="half_left_of_content_item bold">
                                    <p class="timeline type_2 possible_Part">${ele.language_name}</p>
                                </section>
                                <section class="half_right_of_content_item my_award project">
                                <section class="type_2 possible_Part">
                                <b class="title_item" >${ele.level}</b>
                                </section>
                                <section class="content_item">                                
                                            ${ele.content}
                                </section>
                                </section>`
                    part_of_language.innerHTML += cont
                    console.log(language);
                    console.log(ele);
                    language.querySelector(".ct_in_sectionSM").insertAdjacentElement("beforeend",part_of_language);
                    editContent(part_of_language);

                    if(modelCVnow == "mau_1col"){
                        redistributeContent_when_Addele();
                    }
                    else{                  
                        redistributeContent_when_Addele_2col(part_of_language.closest(`.${ele.container}`));
                    }
                    })
                }
            }
            if(dat.anothers.length > 0){
                if(!otherPart){
                    paper_.querySelector(`.${dat.anothers[0].container}`).insertAdjacentElement("beforeend",partAnother);
                    title_in_part = `<section class="bold item_in_part possible_Part title">
                                <i class="fa-solid fa-graduation-cap"></i>
                                <p class="label_partCT">
                                    ${dat.anothers[0].name_title}
                                </p>
                            </section>`
                    let ct_in_sectionSM = document.createElement("section");
                    ct_in_sectionSM.classList.add("ct_in_sectionSM");
                    partAnother.innerHTML = title_in_part; 
                    partAnother.appendChild(ct_in_sectionSM);
                    dat.anothers.forEach(ele=>{
                        let part_of_partAnother = document.createElement("section");
                        part_of_partAnother.classList.add("content_in_CV","paragraph","item_in_part");
                        part_of_partAnother.setAttribute("fatherpart","another");
                        let cont = `<section class="half_left_of_content_item bold">
                                        <p class="timeline type_2 possible_Part">${ele.name_part}</p>
                                    </section>
                                    <section class="half_right_of_content_item my_award project">
                                        <section class="type_2 possible_Part title_item">
                                            <b class="" >${ele.title}</b>
                                        </section>
                                        <section class="content_item">                                      
                                                ${ele.content}
                                        </section>
                                    </section>`
                        part_of_partAnother.innerHTML += cont;
                        partAnother.querySelector(".ct_in_sectionSM").insertAdjacentElement("beforeend",part_of_partAnother);
                        editContent(part_of_partAnother);
                        if(modelCVnow == "mau_1col"){
                            redistributeContent_when_Addele();
                        }
                        else{     
                            console.log(ele.container) ;
                            console.log(part_of_partAnother);         
                            redistributeContent_when_Addele_2col(part_of_partAnother.closest(`.${ele.container}`));
                        }
                    })
                }
                else{
                    console.log(otherPart);
                    otherPart.querySelector(".ct_in_sectionSM").innerHTML = "";
                    dat.anothers.forEach(ele=>{
                        let part_of_partAnother = document.createElement("section");
                        part_of_partAnother.classList.add("content_in_CV","paragraph","item_in_part");
                        part_of_partAnother.setAttribute("fatherpart","another");
                        let cont = `<section class="half_left_of_content_item bold">
                                        <p class="timeline type_2 possible_Part">${ele.name_part}</p>
                                    </section>
                                    <section class="half_right_of_content_item my_award project">
                                        <section class="type_2 possible_Part">
                                            <b class="title_item" >${ele.title}</b>
                                        </section>
                                        <section class="content_item">                          
                                                ${ele.content}
                                        </section>
                                    </section>`
                        part_of_partAnother.innerHTML += cont;
                        otherPart.querySelector(".ct_in_sectionSM").insertAdjacentElement("beforeend",part_of_partAnother);
                        editContent(part_of_partAnother);
                        if(modelCVnow == "mau_1col"){
                            redistributeContent_when_Addele();
                        }
                        else{                  
                            redistributeContent_when_Addele_2col(part_of_partAnother.closest(`.${ele.container}`));
                        }
                    })
                }
            }
            switch(dat.cv.modelCV){
                case "paper_mau0":
                    paperss.forEach((paper,index)=>{                    
                        if(index == 0){
                            resetCV(paper);   
                        }
                        else{
                            Mau0(paper);
                        }
                    })             
                    setColor_mauConlai(currentColor);
                    break;
                case "paper_mau1":
                    paperss.forEach((paper,index)=>{
                        if(index == 0){
                            resetCV(paper);
                            Mau1(paper);   
                        }
                        else{
                            Mau1(paper);   
                        }
                    })
                    setColor_mauConlai(currentColor);
                    break;
                case "paper_mau2":
                    paperss.forEach((paper,index)=>{
                        if(index == 0){
                            console.log(paper);
                            resetCV(paper);
                            Mau2(paper);  
                        }
                        else{
                            Mau2(paper);  
                        }
                    })
                    setColor_mau2(currentColor);                          
                    break;
                case "paper_mau3":
                    paperss.forEach((paper,index)=>{
                        if(index == 0){
                            resetCV(paper);
                            Mau3(paper);  
                        }
                        else{
                            Mau3(paper);  
                        }
                    })
                    setColor_mau3(currentColor);                              
                    break;
                case "paper_mau4":
                    paperss.forEach((paper,index)=>{
                        if(index == 0){
                            resetCV(paper);
                            Mau4(paper);  
                        }
                        else{
                            Mau4(paper);  
                        }
                    })
                    setColor_mauConlai(currentColor);                             
                    break;
                case "paper_mau5":
                    paperss.forEach((paper,index)=>{
                        if(index == 0){
                            resetCV(paper);
                            Mau5(paper); 
                        }
                        else{
                            Mau5(paper); 
                        }
                    })
                    setColor_mau5(currentColor);                              
                    break;
                case "paper_mau6":
                    paperss.forEach((paper,index)=>{
                        if(index == 0){
                            resetCV(paper);
                            Mau6(paper);
                        }
                        else{
                            Mau6(paper);
                        }
                    })
                    setColor_mauConlai(currentColor);                             
                    break;
                case "paper_mau7":
                    paperss.forEach((paper,index)=>{
                        if(index == 0){
                            resetCV(paper);
                            Mau7(paper);
                        }
                        else{
                            Mau7(paper);
                        }
                    })
                    setColor_mau7(currentColor);
                    break;
                case "paper_mau8":
                    paperss.forEach((paper,index)=>{
                        if(index == 0){
                            resetCV(paper);
                            Mau8(paper); 
                        }
                        else{
                            Mau8(paper); 
                        }
                    })
                    setColor_mau8(currentColor);
                    break
                case "paper_mau9":
                    paperss.forEach((paper,index)=>{
                        if(index == 0){
                            resetCV(paper);
                            Mau9(paper);
                        }
                        else{
                            Mau9(paper);
                        }
                    })
                    setColor_mau9_mau10(currentColor);
                    break;
                case "paper_mau10":
                    paperss.forEach((paper,index)=>{
                        if(index == 0){
                            resetCV(paper);
                            Mau10(paper);
                        }
                        else{
                            Mau10(paper);
                        }
                    })
                    setColor_mau9_mau10(currentColor);                           
                    break;
                case "paper_mau11":
                    paperss.forEach((paper,index)=>{
                        if(index == 0){
                            resetCV(paper);
                            Mau11(paper);
                        }
                        else{
                            Mau11(paper);
                        }
                    })
                    setColor_mauConlai(currentColor);
                    break;
                case "paper_mau12":
                    paperss.forEach((paper,index)=>{
                        if(index == 0){
                            resetCV(paper);
                            Mau12(paper);
                        }
                        else{
                            Mau12(paper);
                        }
                    })
                    setColor_mauConlai(currentColor);                           
                    break;
                default:
                    console.log("Mẫu Không Hợp Lệ");
            }
            if(dat.cv.modelCV == "paper_mau1"){
                fixbug0603("half-right");
            }
            if (window.observer1) {
                window.observer1.disconnect();
            }
            if (window.observer3) {
                window.observer3.disconnect();
            }
            const observer1 = new MutationObserver((mutations) => {
                // console.log("res in CheckStyleCV : ",res);
                content_left.addEventListener('input', function(e) {
                    const ele = e.target.closest(".item_in_part");
                    if (!ele) return;
                    
                    if (modelCVnow == "mau_1col") {
                        redistributeContent_1col(ele.closest(".paper"));
                    } else {
                        const part = ele.closest(".half-left") || ele.closest(".half-right");
                        if (part) {
                            redistributeContent_2col(part);
                        }
                    }
                });
                setTimeout(()=>{
                    observer1.disconnect();
                },300)
            }); 
        
            window.observer1 = observer1;
            observer1.observe(content_left, { childList: true, subtree: true });   
 
        
            const observer3 = new MutationObserver((mutations) => { // dùng để phát hiện thay đổi trong "content_left" 
            mutations.forEach((mutation) => {
            //   if (mutation.type === 'childList') {
                // Cập nhật lại NodeList khi có phần tử mới
                part_content = document.querySelectorAll('.content-left .paragraph');
                part_content.forEach(ele => {
                    ele.addEventListener("click", function(event) {
                        event.stopPropagation(); // ngăn chặn hành vi nổi bọt 
                        editContent(ele,modelCVnow);
                    });
                });
            //   }
                });
        
            });
        
            window.observer3 = observer3;
            observer3.observe(content_left, { childList: true, subtree: true });
        
            //Các phần code còn lại giữ nguyên
            part_content.forEach(ele => {
                ele.addEventListener("click", function(event) {
                    event.stopPropagation();
                    editContent(ele, modelCVnow);
                });
            });
            title_cv = document.querySelectorAll(".title");
            title_cv.forEach(function(ele){
                ele.addEventListener("click", function(event) {
                    editContent(ele.closest(".part_ct"), modelCVnow);
                });
            });
            
        })
    }
}
async function urlToBlob(url) {
    try {
        const response = await fetch(url, { mode: 'cors' }); 
        if (!response.ok) {
            throw new Error(`Failed to fetch image from URL: ${response.statusText}`);
        }
        const blob = await response.blob();
        return blob;
    } catch (error) {
        console.error('Error converting URL to Blob:', error);
        throw error;
    }
}
// đã có ảnh mặc định trong file của server , bh chỉ cần làm nhiệm vụ là nếu lúc save hình ảnh nó là ảnh mặc định thì lưu trữ nó là 
async function convertImageToBase64(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'Anonymous'; // Hỗ trợ CORS nếu cần
        img.src = src;

        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;

            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, img.width, img.height);

            const base64 = canvas.toDataURL('image/jpeg'); // Chuyển đổi ảnh sang Base64
            resolve(base64);
        };

        img.onerror = (error) => {
            reject(new Error('Không thể tải ảnh: ' + error));
        };
    });
}
async function base64ToBlob1(base64, contentType = 'image/jpg') {
    console.log(base64);
    if (base64.startsWith('http')) {
        try {
            const blob = await urlToBlob(base64);
            return blob;
        } catch (error) {
            console.error('Lỗi xử lý URL:', error);
            throw error;
        }
    }
    else if (base64.startsWith('data:')) {
        const byteCharacters = atob(base64.split(',')[1]); // Loại bỏ "data:image/png;base64," ở đầu
        const byteArrays = [];
        for (let offset = 0; offset < byteCharacters.length; offset += 512) {
            const slice = byteCharacters.slice(offset, offset + 512);
            const byteNumbers = Array.from(slice).map((char) => char.charCodeAt(0));
            byteArrays.push(new Uint8Array(byteNumbers));
        }
        return new Blob(byteArrays, { type: contentType });
    }
}
async function parseHTTP_to_Blob(url) {
    try {
        const response = await fetch(url, {
            method: "GET",
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            }
        }); // Bật chế độ CORS
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.blob(); // Trả về Blob
    } catch (err) {
        console.error("Lỗi khi tải hình ảnh:", err);
        throw err;
    }
}
// [bug] khi đổi người dùng khác thì idcv nó vẫn tăng 
async function getdatapushtoAPI(contentYourCv){
    let in4CV = "http://localhost:5028/api/NguoiDung/in4CV_myCV";
    let profile = "http://localhost:5028/api/NguoiDung/profile_myCV";
    let overview = "http://localhost:5028/api/NguoiDung/overview";
    let experience = "http://localhost:5028/api/NguoiDung/experience";
    let education = "http://localhost:5028/api/NguoiDung/Education";
    let projects = "http://localhost:5028/api/NguoiDung/Projects";
    let skill = "http://localhost:5028/api/NguoiDung/Skill";
    let awards = "http://localhost:5028/api/NguoiDung/Awards";
    let goals = "http://localhost:5028/api/NguoiDung/Goals";
    let certificate = "http://localhost:5028/api/NguoiDung/Certificate";
    let language = "http://localhost:5028/api/NguoiDung/Language";
    let anotherPart = "http://localhost:5028/api/NguoiDung/AnotherPart";
    let information = "http://localhost:5028/api/NguoiDung/information";
    let upimg = "http://localhost:5028/api/NguoiDung/UploadImage";
        // only1 
    try {
        console.log(contentYourCv);
        const cvResponse = await fetch(in4CV, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userid: userIdnow,
                modelCV: contentYourCv.model,
                color: contentYourCv.color,
                font: contentYourCv.font,
                fontSize: contentYourCv.fontSize
            })
        });
        console.log(cvResponse);
        console.log(JSON.stringify({
            userid: userIdnow,
            modelCV: contentYourCv.model
        }));

        let cvData = await cvResponse.json();
        let idcvnow = cvData.idcv;
        console.log(idcvnow);
        if (!idcvnow) throw new Error("Không thể lấy idcv!");

        const fetchPromises = [];
        await fetch(profile,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json" // Định dạng nội dung JSON
                },
                body: JSON.stringify({
                    idcv : idcvnow,
                    fullname : contentYourCv.userprofile.name,
                    position : contentYourCv.userprofile.position,
                    container : contentYourCv.userprofile.container
                })
        })
        await fetch( information,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json" // Định dạng nội dung JSON
                },
                body: JSON.stringify({
                    idcv : idcvnow,
                    phone : contentYourCv.information.phone,
                    address : contentYourCv.information.address,
                    github : contentYourCv.information.github,
                    email : contentYourCv.information.email,
                    birth : contentYourCv.information.birth,
                    imgSize : contentYourCv.information.imgSize,
                    container : contentYourCv.information.container,
                    phonelabel: contentYourCv.information.phonelabel,
                    addresslabel: contentYourCv.information.addresslabel,
                    githublabel: contentYourCv.information.githublabel,
                    emaillabel: contentYourCv.information.emaillabel,
                    birthlabel: contentYourCv.information.birthlabel
                })
        })     
        console.log(JSON.stringify({
            idcv : idcvnow,
                    fullname : contentYourCv.information.name,
                    position : contentYourCv.information.position,
                    phone : contentYourCv.information.phone,
                    address : contentYourCv.information.address,
                    github : contentYourCv.information.github,
                    email : contentYourCv.information.email,
                    birth : contentYourCv.information.birth,
                    img : contentYourCv.information.imgCV,
                    container : contentYourCv.information.container})
        )
        let getDetailsCVbyID = `http://localhost:5028/api/NguoiDung/user/getDetailsCVbyID?userid=${userIdnow}&idcv=${idcvnow}`;
        const response = await fetch(getDetailsCVbyID);
        const dat = await response.json();
        console.log(dat);
        const blobImage = await base64ToBlob1(contentYourCv.uploadImg);
        await fetch(getDetailsCVbyID)
        .then(res=>{
            return res.json();
        })
        .then(dat=>{
            console.log(dat);
            let in4idnow;
            in4idnow = dat.information.in4id;
                console.log(blobImage);
                // Chuẩn bị dữ liệu gửi lên API
                const formData = new FormData();
                formData.append("in4id", in4idnow); // Giá trị in4id
                formData.append("file", blobImage, "image.jpg"); // Ảnh dưới dạng blob
                console.log("-----------------");
                for (let pair of formData.entries()) {
                    console.log(pair[0] + ": " + typeof pair[1]);
                }
                console.log(formData)
                // Gửi request lên API
                fetch(upimg, {
                    method: "POST",
                    body: formData, 
                })
                .then((res) => {
                    if (!res.ok) throw new Error("Lỗi khi tải ảnh lên!");
                    return res.json();
                })
                .then((data) => {
                    console.log("Phản hồi từ API:", data);
                })
                .catch((err) => {
                    console.error(err);
                });
        })
        if(contentYourCv.overview.length > 0){
            console.log(contentYourCv.overview);
            contentYourCv.overview.forEach(dat=>{
                console.log(dat.name_title)
                console.log(JSON.stringify({
                    idcv : idcvnow,
                    contentOverView : dat.content,
                    container : dat.container,
                    name_title : dat.name_title
                }));
                fetchPromises.push(
                fetch(overview,{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json" 
                    },
                    body: JSON.stringify({
                        idcv : idcvnow,
                        contentOverView : dat.content,
                        container : dat.container,
                        name_title : dat.name_title
                    })
                })
                )
            })       
        }
        if(contentYourCv.workexperience.length > 0){
            contentYourCv.workexperience.forEach((dat,index)=>{
                fetchPromises.push(
                    fetch(experience,{
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json" // Định dạng nội dung JSON
                        },
                        body: JSON.stringify({
                            idcv : idcvnow,
                            company_name : dat.title,
                            position: dat.descreption,
                            time: dat.time,
                            content: dat.content,
                            container : dat.container,
                            name_title : dat.name_title
                        })
                    })
    
                )
                console.log(
                    JSON.stringify({
                        idcv : idcvnow,
                            company_name : dat.title,
                            position: dat.descreption,
                            time: dat.time,
                            content: dat.content,
                            container : dat.container,
                            name_title : dat.name_title
                    })
                )
            })
        }
        if(contentYourCv.education.length > 0){
            contentYourCv.education.forEach((dat,index)=>{
                fetchPromises.push(
                    fetch(education,{
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json" // Định dạng nội dung JSON
                        },
                        body: JSON.stringify({
                            idcv : idcvnow,
                            school_name : dat.title,
                            time: dat.time,
                            content: dat.content,
                            container : dat.container,
                            name_title : dat.name_title
                        })
                    })
                )
                console.log(
                    JSON.stringify({
                        idcv : idcvnow,
                        school_name : dat.school_name,
                        time: dat.time,
                        content: dat.content,
                        container : dat.container,
                        name_title : dat.name_title
                    })
                )
            })

        }
        if(contentYourCv.skill.length > 0){
            contentYourCv.skill.forEach((dat,index)=>{
                fetchPromises.push(
                        fetch(skill,{
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json" // Định dạng nội dung JSON
                            },
                            body: JSON.stringify({
                                idcv : idcvnow,
                                skill_name : dat.time,
                                content: dat.content,
                                container : dat.container,
                                name_title : dat.name_title
                            })
                        })
                        
                    )
            })
        }
        if(contentYourCv.project.length > 0){
            contentYourCv.project.forEach((dat,index)=>{
                fetchPromises.push(
                    fetch(projects,{
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json" // Định dạng nội dung JSON
                        },
                        body: JSON.stringify({
                            idcv : idcvnow,
                            project_name : dat.project_name,
                            client: dat.client,
                            time: dat.time,
                            descriptions: dat.descriptions,
                            number_of_members: Number(dat.number_of_members),
                            position: dat.position,
                            responsibilities: dat.responsibilities,
                            technology_in_use: dat.technology_in_use,
                            container : dat.container,
                            name_title : dat.name_title,
                            client_lable: dat.client_lable,
                            des_lable: dat.des_lable,
                            nom_lable: dat.nom_lable,
                            pos_lable: dat.pos_lable,
                            respon_lable: dat.respon_lable,
                            techuse_lable: dat.techuse_lable
                        })
                    })
                )
                console.log(JSON.stringify({
                    idcv : idcvnow,
                    project_name : dat.project_name,
                    client: dat.client,
                    time: dat.time,
                    descriptions: dat.descriptions,
                    number_of_members: Number(dat.number_of_members),
                    position: dat.position,
                    responsibilities: dat.responsibilities,
                    technology_in_use: dat.technology_in_use,
                    container : dat.container,
                    name_title : dat.name_title,
                    client_lable: dat.client_lable,
                    des_lable: dat.des_lable,
                    nom_lable: dat.nom_lable,
                    pos_lable: dat.pos_lable,
                    respon_lable: dat.respon_lable,
                    techuse_lable: dat.techuse_lable
                }))
            })
        }
        if(contentYourCv.awards.length > 0){
            contentYourCv.awards.forEach((dat,index)=>{
                fetchPromises.push(
                    fetch(awards,{
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json" // Định dạng nội dung JSON
                        },
                        body: JSON.stringify({
                            idcv : idcvnow,
                            award_name : dat.title,
                            time: dat.time,
                            content: dat.content,
                            container : dat.container,
                            name_title : dat.name_title
                        })
                    })
                )
            })
        }
        if(contentYourCv.goals.length > 0){
            contentYourCv.goals.forEach((dat,index)=>{
                fetchPromises.push(
                    fetch(goals,{
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json" // Định dạng nội dung JSON
                        },
                        body: JSON.stringify({
                            idcv : idcvnow,
                            term: dat.time,
                            content: dat.content,
                            container : dat.container,
                            name_title : dat.name_title
                        })
                    })
                )
            })
        }
        if(contentYourCv.certificate.length > 0){
            contentYourCv.certificate.forEach((dat,index)=>{
                fetchPromises.push(
                    fetch(certificate,{
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json" // Định dạng nội dung JSON
                        },
                        body: JSON.stringify({
                            idcv : idcvnow,
                            time: dat.time,
                            content: dat.content,
                            container : dat.container,
                            name_title : dat.name_title
                        })
                    })
                )
            })
        }
        if(contentYourCv.language.length > 0){
            contentYourCv.language.forEach((dat,index)=>{
                fetchPromises.push(
                    fetch(language,{
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json" // Định dạng nội dung JSON
                        },
                        body: JSON.stringify({
                            idcv : idcvnow,
                            language_name: dat.time,
                            level: dat.title,
                            content: dat.content,
                            container : dat.container,
                            name_title : dat.name_title
                        })
                    })
                )
            })
        }
        if(contentYourCv.another.length > 0){
            console.log(contentYourCv.another.length);
            console.log(contentYourCv.another);
            contentYourCv.another.forEach((dat,index)=>{
                console.log("lần ",index);
                fetchPromises.push(
                    fetch(anotherPart,{
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json" // Định dạng nội dung JSON
                        },
                        body: JSON.stringify({
                            idcv : idcvnow,
                            name_part: dat.time,
                            title: dat.title,
                            content: dat.content,
                            container : dat.container,
                            name_title : dat.name_title
                        })
                    })
                )
            })
        }
        await Promise.all(fetchPromises);
    }
    catch (error) {
        console.error("Lỗi khi đẩy dữ liệu:", error);
    }
}
async function updateCV(contentYourCv){
    let api = `http://localhost:5028/api/NguoiDung/Update_DetailsCVbyID?userid=${userIdnow}&idcv=${localStorage.getItem("IDCVcurrent")}`;
    let getDetailsCVbyID = `http://localhost:5028/api/NguoiDung/user/getDetailsCVbyID?userid=${userIdnow}&idcv=${localStorage.getItem("IDCVcurrent")}`;
    // làm api update img 
    // dùng fatherpart để xây dựng và fix lỗi di chuyển 
    console.log(contentYourCv);
    const response = await fetch(getDetailsCVbyID);
    const data = await response.json();
    let in4idnow = data.information.in4id;
    let apiIMG = `http://localhost:5028/api/NguoiDung/UpdateUpimg?in4id=${in4idnow}`;
    console.log(data);
    // console.log(contentYourCv.uploadImg.substring(0,4));
    if(contentYourCv.uploadImg.substring(0,4) == "http"){
        let img_unchanged = await parseHTTP_to_Blob(contentYourCv.uploadImg);
        console.log(img_unchanged);
        const formData1 = new FormData();
        formData1.append("in4id", in4idnow); // ID của thông tin cần cập nhật
        formData1.append("imgFile", img_unchanged, "image.jpg"); // Ảnh dưới dạng Blob
        try {
            const response = await fetch(apiIMG, {
                method: "PUT",
                body: formData1 
            });
    
            if (!response.ok) {
                throw new Error("Lỗi khi tải ảnh lên!");
            }
    
            const data = await response.json();
            console.log("Phản hồi từ API:", data);
        } catch (err) {
            console.error(err);
        }
    }
    else{
        const blobImage = await base64ToBlob1(contentYourCv.uploadImg);    
        const formData = new FormData();
        formData.append("in4id", in4idnow); // ID của thông tin cần cập nhật
        formData.append("imgFile", blobImage, "image.jpg"); // Ảnh dưới dạng Blob
        
        for (let pair of formData.entries()) {
            console.log(pair[0] + ": " + typeof pair[1]);
        }
    
        // Gửi request PUT để cập nhật ảnh
        try {
            const response = await fetch(apiIMG, {
                method: "PUT",
                body: formData // Gửi dữ liệu dưới dạng FormData (trình duyệt tự động set Content-Type cho FormData)
            });
    
            if (!response.ok) {
                throw new Error("Lỗi khi tải ảnh lên!");
            }
    
            const data = await response.json();
            console.log("Phản hồi từ API:", data);
        } catch (err) {
            console.error(err);
        }
    }
    fetch(api,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            cv: {
                userid: userIdnow,
                modelCV: contentYourCv.model,
                color: contentYourCv.color,
                font: contentYourCv.font,
                fontSize: contentYourCv.fontSize
            },
            profile: {
                idcv: IDCVwhenChoose,
                fullname: contentYourCv.userprofile.name,
                position: contentYourCv.userprofile.position,
                container: contentYourCv.userprofile.container
            },
            information: {
                idcv: IDCVwhenChoose,
                phone: contentYourCv.information.phone,
                address: contentYourCv.information.address,
                github: contentYourCv.information.github,
                email: contentYourCv.information.email,
                birth: contentYourCv.information.birth,
                imgSize: contentYourCv.information.imgSize,
                container: contentYourCv.information.container,
                phonelabel: contentYourCv.information.phonelabel,
                addresslabel: contentYourCv.information.addresslabel,
                githublabel: contentYourCv.information.githublabel,
                emaillabel: contentYourCv.information.emaillabel,
                birthlabel: contentYourCv.information.birthlabel
            }
        })
    })
}
// Kiểm tra lại dạng ảnh được tải lên và đối chiếu vs Chat
// khi nhấn thêm mới hoặc chọn 1 Cv để hiển thị thì cái mới thêm sẽ bị xóa 
console.log(localStorage.getItem("checkxemthemchua"));
if(btn_save_yourCV){
    btn_save_yourCV.onclick = async ()=>{
        await SaveyourCV(contentYourCv);
        console.log(contentYourCv);
        await updateCV(contentYourCv); // làm nhiệm vụ update 1 phần của CV 
        await Deletebe4Update(localStorage.getItem("IDCVcurrent")); // làm nhiệm vụ xóa phần còn lại của CV cũ 
        await addDatatoUpdate(contentYourCv,localStorage.getItem("IDCVcurrent")); // thêm mới nội dung mới vào phần còn lại vừa xóa 
        alert("Lưu CV Thành Công ✅");
        // await getdatapushtoAPI(contentYourCv);
    }
}
if(btn_add_newCV){
    btn_add_newCV.onclick = async ()=>{
        localStorage.setItem("checkxemthemchua",true);
        localStorage.setItem("status","update")
        btn_save_yourCV.classList.remove("hidden");
        btn_add_newCV.classList.add("hidden");
        if(localStorage.getItem("checkxemthemchua") == "true"){
            alert("Thêm Dữ Liệu Thành Công");
        }
        await SaveyourCV(contentYourCv);
        console.log(contentYourCv);
        await getdatapushtoAPI(contentYourCv);
    }
}

function handleRegion(){
    let allpaper = document.querySelectorAll(".paper");
    allpaper.forEach(paper=>{
        let nuatrai = paper.querySelector(".half-left");
        let nuaphai = paper.querySelector(".half-right");
        console.log(nuaphai.innerText);
        if(getTemplateCV_Now() == "paper_mau0" || getTemplateCV_Now() == "paper_mau2" || getTemplateCV_Now() == "paper_mau3" || getTemplateCV_Now() == "paper_mau10"){
            if(nuaphai.innerText == ""){
                // ẩn
                if(nuaphai.querySelector(".region_use_to_add")) nuaphai.querySelector(".region_use_to_add").style.display = "flex";
            }
            else{
                // hiện
                if(nuaphai.querySelector(".region_use_to_add")) nuaphai.querySelector(".region_use_to_add").style.display = "none";
            }
        }
        else{
            if(nuaphai){
                console.log(nuaphai);
                if(nuaphai.innerText == ""){
                    // ẩn
                    if(nuaphai.querySelector(".region_use_to_add")) nuaphai.querySelector(".region_use_to_add").style.display = "flex";
                    
                }
                else{
                    if(nuaphai.querySelector(".region_use_to_add")) nuaphai.querySelector(".region_use_to_add").style.display = "none";
                }
            }
            if(nuatrai){
                console.log(nuatrai);

                if(nuatrai.innerText == ""){
                    // ẩn
                    if(nuatrai.querySelector(".region_use_to_add")) nuatrai.querySelector(".region_use_to_add").style.display = "flex";
                }
                else{
                    // hiện
                    if(nuatrai.querySelector(".region_use_to_add")) nuatrai.querySelector(".region_use_to_add").style.display = "none";
                }
            }
        }
    })
}
let region_use_to_adds = document.querySelectorAll(".region_use_to_add");
region_use_to_adds.forEach(region_use_to_add=>{
    region_use_to_add.onclick = ()=>{
        addNewItem.classList.remove("hidden");
        let part_avai = document.querySelectorAll(".content-left .part_ct");
        let parts_exists = [...part_avai].map(ptu=>{
            return ptu.getAttribute("class").split(" ")[0];
        })
        list_addNewItem.forEach(e=>{
            if(check_part_avai(e,parts_exists) == false ) e.classList.add("not_available");
            else{
                e.onclick = () =>{
                    let parts = e.getAttribute("class").split(" ")[2];
                    region_use_to_add.insertAdjacentElement("afterend", (parts == "skill") ? partSkill : (parts == "project") ? partProject : (parts == "awards") ? partAwards : (parts == "goals") ? partworkGoals : (parts == "certificate") ? partCertificate : (parts == "language") ? partLanguage : (parts == "overview") ? partOverview : (parts == "workexperience") ? partworkExp : (parts == "education") ? partEducation : partAnother);  
                    handleRegion();
                    addNewItem.classList.add("hidden");
                }
            }
        })
    }
})

function GetAllData(fatherpart){
    let qal = { timeline : "",title : "",description: "",contents: ""}
    let listqal = [];
    let listDat = document.querySelectorAll(`section[fatherpart="${fatherpart}"]`);
    console.log(listDat);
    listDat.forEach(dat=>{
        qal.timeline = dat.querySelector(".timeline").innerHTML;
        qal.title = dat.querySelector(".title_item").innerHTML;
        qal.description = dat.querySelector(".description").innerHTML;
        qal.contents = dat.querySelector(".content_item").innerHTML;
        listqal.push(qal);
    })
    return listqal;
}
function checkContainer(part_in_paper,model){
    //mau0,1,2 hd ct
    //mau3 phan phu,ct
    //mau4,5,6,7,9,11 hleft,right
    //mau8 ct>hright ,hd 
    //mau10  ct
    //mau12 hright,hleft,hd
    // part in4 không thể xóa 

    // 1,2,3,10 -> mình half left còn lại là cả left cả right
    if(model == "paper_mau0" || model == "paper_mau2" || model == "paper_mau3" || model == "paper_mau10"){
        console.log("Lọt Vào Đây");
        if(part_in_paper.closest(".half-right")){
            return "half-right";
        }
        else{
            return "heading_paper"
        }
    }
    else if(model == "paper_mau1" || model == "paper_mau8"){
        if(part_in_paper.closest(".half-left")){
            if(part_in_paper.closest(".half-left").classList.contains("heading_paper")){
                return "half-left";
            }
        }
        else{
            return "half-right";
        }
    }
    else{
        if(part_in_paper.closest(".half-left")){
            return "half-left";
        }
        else{
            return "half-right";
        }
    }
    // container hd ct hay left right chỉ dùng để xem ptu nó nằm ở phânf nào 
}

async function SaveyourCV(a){
    // userprofile
    a.userprofile.name = content_left.querySelector("#name").innerText || "";
    a.userprofile.position = content_left.querySelector("#position").innerText || "";
    // nội dung phần thân cv 
    let overview,workexperience,education,skill,project,awards,goals,certificate,language,another;
    information = content_left.querySelector(".information");
    overview = content_left.querySelector(".overview");
    workexperience = content_left.querySelector(".workexperience");
    education = content_left.querySelector(".education");
    skill = content_left.querySelector(".skill");
    project = content_left.querySelector(".project");
    awards = content_left.querySelector(".awards");
    goals = content_left.querySelector(".goals");
    certificate = content_left.querySelector(".certificate");
    language = content_left.querySelector(".language");
    another = content_left.querySelector(".another");
    // lấy ra mẫu CV hiện tại 
    a.model = getTemplateCV_Now();
    title_HDnow = content_left.querySelector(".title_HD"); 
    a.userprofile.container = checkContainer(title_HDnow,a.model);
    console.log(paper.style.fontFamily);
    if(paper.style.fontFamily){
        a.font = paper.style.fontFamily;
    }
    else{
        a.font = "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif";
    }
    if(paper.style.fontSize){
        a.fontSize = paper.style.fontSize;
    }
    else{
        a.fontSize = "13.5px";
    }
    if(getColorCVNow()){
        a.color = getColorCVNow();
    }
    else{
        a.color = "rgb(252, 83, 83)";
    }
    // in4mation
    a.information.phone = content_left.querySelector("#phone").innerText || "";
    a.information.address = content_left.querySelector("#address").innerText || "";
    a.information.birth = content_left.querySelector("#birth").innerText || "";
    a.information.email = content_left.querySelector("#email").innerText || "";
    a.information.github = content_left.querySelector("#github").innerText || "";
    a.information.container = checkContainer(information,a.model);

    a.information.phonelabel = content_left.querySelector(".phonelable").innerText || "";
    a.information.addresslabel = content_left.querySelector(".addresslable").innerText || "";
    a.information.githublabel = content_left.querySelector(".githublable").innerText || "";
    a.information.emaillabel = content_left.querySelector(".emaillable").innerText || "";
    a.information.birthlabel = content_left.querySelector(".birthlable").innerText || "";

    if((content_left.querySelector(".anh_CV>img").getAttribute("src") + "").substring(0,5) == "./img"){
        const base64 = await convertImageToBase64(content_left.querySelector(".anh_CV>img").getAttribute("src"));
        a.uploadImg = await convertImageToBase64(base64);
    }
    else{
        a.uploadImg = content_left.querySelector(".anh_CV>img").getAttribute("src") || "";
    }
    if(content_left.querySelector(".anh_CV>img").getAttribute("style")){
        a.information.imgSize = content_left.querySelector(".anh_CV>img").style.width;
    }
    else{
        a.information.imgSize = "120px";
    }
    if(overview){
        let listov = overview.querySelectorAll("section[fatherpart='overview']");
        let name_title = overview.querySelector(".label_partCT").innerText;
        listov.forEach(ele=>{
            let obj_ovv = {
                content : ele.innerHTML,
                container : checkContainer(overview,a.model),
                name_title : name_title
            }
            a.overview.push(obj_ovv);
        })
    }
    if(project){
        console.log("Có Project");
        let listpj = content_left.querySelectorAll(`section[fatherpart="project"]`);
        listpj.forEach(ele=>{
            let obj_form2 =  {
                project_name : "",
                time : "",
                // 
                client : "",
                descriptions : "",
                number_of_members : "",
                position : "",
                responsibilities : "",
                technology_in_use : "",

                container : "",
                // lable 
                name_title : "",
                client_lable: "",
                des_lable: "",
                nom_lable: "",
                pos_lable: "",
                respon_lable: "",
                techuse_lable: ""
            }
            obj_form2.project_name = ele.querySelector(".name_project>b").innerText;
            obj_form2.time = ele.querySelector(".name_project>p").innerText;
            obj_form2.client = ele.querySelector(".client_project").innerText;
            obj_form2.descriptions = ele.querySelector(".descriptions_project").innerText;
            obj_form2.number_of_members = ele.querySelector(".number_of_members_project").innerText;
            obj_form2.position = ele.querySelector(".position_project").innerText;
            obj_form2.responsibilities = ele.querySelector(".responsibilities_project").innerText;
            obj_form2.technology_in_use = ele.querySelector(".technology_in_use_project").innerText;
            obj_form2.container  = checkContainer(project,a.model);
            // lable
            obj_form2.client_lable = ele.querySelector(".client_project_lable").innerText;
            obj_form2.des_lable = ele.querySelector(".descriptions_project_lable").innerText;
            obj_form2.nom_lable = ele.querySelector(".number_of_members_project_lable").innerText;
            obj_form2.pos_lable = ele.querySelector(".position_project_lable").innerText;
            obj_form2.respon_lable = ele.querySelector(".responsibilities_project_lable").innerText;
            obj_form2.techuse_lable = ele.querySelector(".technology_in_use_project_lable").innerText;

            console.log(project.querySelector(".label_partCT"));
            obj_form2.name_title = project.querySelector(".label_partCT") ? project.querySelector(".label_partCT").innerText : "Dự Án";
            console.log(project.querySelector(".label_partCT"));
            
            a.project.push(obj_form2);
        })
    }
    if(workexperience || education || skill || awards || goals || certificate || language || another){
        //information ||
        let list_part_obj_form1 = [workexperience,education,skill,awards,goals,certificate,language,another];
        console.log(list_part_obj_form1);
        list_part_obj_form1.forEach(part=>{
            handleForm(part,a,checkContainer,a.model);
        })
    }
    // return a;
}
function handleForm(part,a,checkContainer,model){
    if(part){
        console.log(part);
        let classname = part.getAttribute("class").split(" ")[0];
        let label_partct = part.querySelector(".label_partCT");
        console.log(classname);
        let listwe = content_left.querySelectorAll(`section[fatherpart="${classname}"]`);
        listwe.forEach(el=>{
            let obj_form1 =  {
                time: "",
                title : "",
                descreption : "",
                content : "",
                container : "",
                name_title : ""
            }
            if(el.querySelector(".half_left_of_content_item")){
                obj_form1.time = el.querySelector(".half_left_of_content_item").innerText;
            }
            if(el.querySelector(".title_item")){
                obj_form1.title = el.querySelector(".title_item").innerText;
            }
            if(el.querySelector(".description")){
                obj_form1.descreption = el.querySelector(".description").innerText;
            }
            if(el.querySelector(".content_item")){
                obj_form1.content = el.querySelector(".content_item").innerHTML;
            }
            if(label_partct){
                obj_form1.name_title = label_partct.innerText;
            }
            obj_form1.container = checkContainer(part,model);
            console.log(obj_form1);
            a[classname].push(obj_form1);
        })
        console.log(a[classname]);
    }
}
// dữ liệu được lư vào localstorage giống contentYourCv 
// let testadm0 = document.querySelector("section[fatherpart='workexperience']")
// console.log(testadm0.querySelector(".timeline"));    
// //.querySelector(".timeline")
// console.log(GetAllData("workexperience"))
console.log(localStorage.getItem("status"));
if(localStorage.getItem("status") == "update"){
    btn_save_yourCV.classList.remove("hidden");
    btn_add_newCV.classList.add("hidden");
}
else{
    btn_add_newCV.classList.remove("hidden");
    btn_save_yourCV.classList.add("hidden");
}
if(is_default == false){
    console.log(is_default);
    CheckStyleCV(0);
}

// id sẽ là id mới nhất (khi đc tạo mới) 
// mỗi 3.5s lưu nd Cv htai vào 1 
// lấy ra idcv hiện tại đang chọn để update call ra api cv hiện tại và tiêns hành thêm id của phần đó vào bảng tmp 
// [38] Khi chuyển mẫu ở phần heading CV các label nhập tt cá nhân bị dính thêm <br> 
// (sử dụng hàm antiEnter mỗi phần chuyển mẫu thì gọi hàm này ở các label và phần nhập tt label)

async function addDatatoUpdate(contentYourCv,idcvnow){
    console.log(" ----------------------------------------- ",contentYourCv);
    if(!idcvnow){
        alert("Có Lỗi Xảy ra vui lòng chọn lại CV của bạn để update");
        // return;
    }
    let overview = "http://localhost:5028/api/NguoiDung/overview";
    let experience = "http://localhost:5028/api/NguoiDung/experience";
    let education = "http://localhost:5028/api/NguoiDung/Education";
    let projects = "http://localhost:5028/api/NguoiDung/Projects";
    let skill = "http://localhost:5028/api/NguoiDung/Skill";
    let awards = "http://localhost:5028/api/NguoiDung/Awards";
    let goals = "http://localhost:5028/api/NguoiDung/Goals";
    let certificate = "http://localhost:5028/api/NguoiDung/Certificate";
    let language = "http://localhost:5028/api/NguoiDung/Language";
    let anotherPart = "http://localhost:5028/api/NguoiDung/AnotherPart";
    const fetchPromises = [];

    if(contentYourCv.overview.length > 0){
        console.log(contentYourCv.overview);
        contentYourCv.overview.forEach(dat=>{
            fetchPromises.push(
            fetch(overview,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json" // Định dạng nội dung JSON
                },
                body: JSON.stringify({
                    idcv : idcvnow,
                    contentOverView : dat.content,
                    container : dat.container,
                    name_title : dat.name_title
                })
            })
            )
        })       
    }
    if(contentYourCv.workexperience.length > 0){
        console.log(contentYourCv.workexperience);
        contentYourCv.workexperience.forEach((dat,index)=>{
            fetchPromises.push(
                fetch(experience,{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json" // Định dạng nội dung JSON
                    },
                    body: JSON.stringify({
                        idcv : idcvnow,
                        company_name : dat.title,
                        position: dat.descreption,
                        time: dat.time,
                        content: dat.content,
                        container : dat.container,
                        name_title : dat.name_title
                    })
                })

            )
            console.log(
                JSON.stringify({
                    idcv : idcvnow,
                        company_name : dat.title,
                        position: dat.descreption,
                        time: dat.time,
                        content: dat.content,
                        container : dat.container,
                        name_title : dat.name_title
                })
            )
        })
    }
    if(contentYourCv.education.length > 0){
        console.log(contentYourCv.education);
        contentYourCv.education.forEach((dat,index)=>{
            fetchPromises.push(
                fetch(education,{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json" // Định dạng nội dung JSON
                    },
                    body: JSON.stringify({
                        idcv : idcvnow,
                        school_name : dat.title,
                        time: dat.time,
                        content: dat.content,
                        container : dat.container,
                        name_title : dat.name_title
                    })
                })
            )
            console.log(
                JSON.stringify({
                    idcv : idcvnow,
                    school_name : dat.school_name,
                    time: dat.time,
                    content: dat.content,
                    container : dat.container,
                    name_title : dat.name_title
                })
            )
        })

    }
    if(contentYourCv.skill.length > 0){
        console.log(contentYourCv.skill);
        contentYourCv.skill.forEach((dat,index)=>{
            fetchPromises.push(
                    fetch(skill,{
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json" // Định dạng nội dung JSON
                        },
                        body: JSON.stringify({
                            idcv : idcvnow,
                            skill_name : dat.time,
                            content: dat.content,
                            container : dat.container,
                            name_title : dat.name_title
                        })
                    })
                    
                )
        })
    }
    if(contentYourCv.project.length > 0){
        console.log(contentYourCv.project);
        contentYourCv.project.forEach((dat,index)=>{
            fetchPromises.push(
                fetch(projects,{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json" // Định dạng nội dung JSON
                    },
                    body: JSON.stringify({
                        idcv : idcvnow,
                        project_name : dat.project_name,
                        client: dat.client,
                        time: dat.time,
                        descriptions: dat.descriptions,
                        number_of_members: Number(dat.number_of_members),
                        position: dat.position,
                        responsibilities: dat.responsibilities,
                        technology_in_use: dat.technology_in_use,
                        container : dat.container,
                        name_title : dat.name_title,
                        client_lable: dat.client_lable,
                        des_lable: dat.des_lable,
                        nom_lable: dat.nom_lable,
                        pos_lable: dat.pos_lable,
                        respon_lable: dat.respon_lable,
                        techuse_lable: dat.techuse_lable
                    })
                })
                .then(response => {
                    if (!response.ok) {
                        return response.json().then(errData => {
                            if (response.status === 400) {
                                alert(`[X] Lỗi: Dữ liệu phần Project chưa chính xác. Vui lòng kiểm tra lại !`);
                            }
                        });
                    }
                    return response.json();
                })
            )
            console.log(JSON.stringify({
                idcv : idcvnow,
                project_name : dat.project_name,
                client: dat.client,
                time: dat.time,
                descriptions: dat.descriptions,
                number_of_members: Number(dat.number_of_members),
                position: dat.position,
                responsibilities: dat.responsibilities,
                technology_in_use: dat.technology_in_use,
                container : dat.container,
                name_title : dat.name_title,
                client_lable: dat.client_lable,
                des_lable: dat.des_lable,
                nom_lable: dat.nom_lable,
                pos_lable: dat.pos_lable,
                respon_lable: dat.respon_lable,
                techuse_lable: dat.techuse_lable
            }))
        })
    }
    if(contentYourCv.awards.length > 0){
        console.log(contentYourCv.awards);
        contentYourCv.awards.forEach((dat,index)=>{
            fetchPromises.push(
                fetch(awards,{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json" // Định dạng nội dung JSON
                    },
                    body: JSON.stringify({
                        idcv : idcvnow,
                        award_name : dat.title,
                        time: dat.time,
                        content: dat.content,
                        container : dat.container,
                        name_title : dat.name_title
                    })
                })
            )
        })
    }
    if(contentYourCv.goals.length > 0){
        console.log(contentYourCv.goals);
        contentYourCv.goals.forEach((dat,index)=>{
            fetchPromises.push(
                fetch(goals,{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json" // Định dạng nội dung JSON
                    },
                    body: JSON.stringify({
                        idcv : idcvnow,
                        term: dat.time,
                        content: dat.content,
                        container : dat.container,
                        name_title : dat.name_title
                    })
                })
            )
        })
    }
    if(contentYourCv.certificate.length > 0){
        console.log(contentYourCv.certificate);
        contentYourCv.certificate.forEach((dat,index)=>{
            fetchPromises.push(
                fetch(certificate,{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json" // Định dạng nội dung JSON
                    },
                    body: JSON.stringify({
                        idcv : idcvnow,
                        time: dat.time,
                        content: dat.content,
                        container : dat.container,
                        name_title : dat.name_title
                    })
                })
            )
        })
    }
    if(contentYourCv.language.length > 0){
        console.log(contentYourCv.language);

        contentYourCv.language.forEach((dat,index)=>{
            fetchPromises.push(
                fetch(language,{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json" // Định dạng nội dung JSON
                    },
                    body: JSON.stringify({
                        idcv : idcvnow,
                        language_name: dat.time,
                        level: dat.title,
                        content: dat.content,
                        container : dat.container,
                        name_title : dat.name_title
                    })
                })
            )
        })
    }
    if(contentYourCv.another.length > 0){
        console.log(contentYourCv.another);
        contentYourCv.another.forEach((dat,index)=>{
            fetchPromises.push(
                fetch(anotherPart,{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json" // Định dạng nội dung JSON
                    },
                    body: JSON.stringify({
                        idcv : idcvnow,
                        name_part: dat.time,
                        title: dat.title,
                        content: dat.content,
                        container : dat.container,
                        name_title : dat.name_title
                    })
                })
            )
        })
    }
    Promise.all(fetchPromises);
}
function Handle_String(string,char){
    let str = string.toLowerCase();

    if(str.substring(str.length - 1) == char){
        // console.log(str.substring(0,str.length - 1));
        return str.substring(0,str.length - 1);
    }
    else{
        return str;
    }
}
async function Deletebe4Update(idcv) {
    if(!idcv){
        alert("Có Lỗi xảy ra vui lòng chọn lại CV để update");
        // return;
    }
    const endpoints = {
        overview: `http://localhost:5028/api/NguoiDung/Delete_Overview?idcv=${idcv}`,
        workexperience: `http://localhost:5028/api/NguoiDung/Delete_WorkExperience?idcv=${idcv}`,
        education: `http://localhost:5028/api/NguoiDung/Delete_Education?idcv=${idcv}`,
        skill: `http://localhost:5028/api/NguoiDung/Delete_Skill?idcv=${idcv}`,
        project: `http://localhost:5028/api/NguoiDung/Delete_Project?idcv=${idcv}`,
        awards: `http://localhost:5028/api/NguoiDung/Delete_Awards?idcv=${idcv}`,
        goals: `http://localhost:5028/api/NguoiDung/Delete_Goals?idcv=${idcv}`,
        certificate: `http://localhost:5028/api/NguoiDung/Delete_Cer?idcv=${idcv}`,
        language: `http://localhost:5028/api/NguoiDung/Delete_Language?idcv=${idcv}`,
        another: `http://localhost:5028/api/NguoiDung/Delete_Another?idcv=${idcv}`
    };
    let arrhandle1 = [];
    let arrhandle2 = [];
    let currentPart_available = Array.from(content_left.querySelectorAll(".part_ct")).map(ele => {
        return ele.getAttribute("class").split(" ")[0];
    });
    let url = `http://localhost:5028/api/NguoiDung/user/getDetailsCVbyID?userid=${userIdnow}&idcv=${idcv}`;
    let resp = await fetch(url);
    let data = await resp.json();

    for(let key in data){
        if(data[key].length == 0 || key == "cv" || key == "profile" || key == "information"){
            continue;
        }
        arrhandle1.push(Handle_String(key,"s"));
    }
    for(let avai of currentPart_available){
        if(avai == "title_HD" || avai == "information"){
            continue;
        }
        arrhandle2.push(Handle_String(avai,"s"));
    }
    arrhandle1.forEach(ele=>{
        if(!arrhandle2.includes(ele)){
            let hi = (ele == "award" || ele == "goal") ? ele + "s" : ele;
            console.log(ele);
            if(ele == "overview" || ele == "workexperience" || ele == "education"){
                console.log(ele);
                // document.querySelector(`.${ele}`).remove();
            }
            if (endpoints[hi]) {
                fetch(endpoints[hi], {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' }
                });
            }
        }
    })
    console.log(arrhandle1);
    console.log(arrhandle2);

    let deleteRequests = [];

    for (const e of currentPart_available) {
        if (endpoints[e]) { 
            deleteRequests.push(
                fetch(endpoints[e], {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' }
                })
            );
        }
    }

    // Chờ tất cả các yêu cầu xóa hoàn thành
    await Promise.all(deleteRequests)
    .then(dat=>{
        console.log(dat);
    })
    .catch(err=>{
        console.log(err);
    })
}

// setting khung chatbot 
document.addEventListener("DOMContentLoaded", function () {
    function applyChatStyles() {
        const messenger = document.querySelector("df-messenger");
        if (messenger) {
            setTimeout(() => {
                const chat = messenger.shadowRoot?.querySelector("df-messenger-chat");
                const chatWrapper = chat?.shadowRoot?.querySelector(".chat-wrapper");
                if (chatWrapper) {
                    chatWrapper.style.bottom = "10px";
                    chatWrapper.style.right = "90px";
                    console.log("CSS Applied: bottom 10px, right 90px"); // Debug
                }
            }, 300); 
        }
    }

    function setupClickListener() {
        const messenger = document.querySelector("df-messenger");
        if (messenger) {
            const widgetIcon = messenger.shadowRoot?.querySelector("button#widgetIcon");
            if (widgetIcon) {
                widgetIcon.addEventListener("click", applyChatStyles);
            } else {
                setTimeout(setupClickListener, 100);
            }
        }
    }
    setupClickListener();
});


