//status: active - sản phẩm còn bán-hiển thị trên trang web; inactive - sản phẩm hết hàng hoặc không còn bán-không hiển thị trên web

export const defaultproducts = [
  {
    id: "p001",
    name: "Laptop Dell XPS 13",
    price: 32490000,
    currency: "VND",
    image: "../assets/dell-xps13.jpg",
    link: "chi-tiet.html",
    description: "Laptop Dell XPS 13 tiếp tục khẳng định vị thế dẫn đầu trong phân khúc máy tính xách tay cao cấp dành cho doanh nhân và giới văn phòng. Điểm nhấn ấn tượng nhất của thiết bị chính là màn hình InfinityEdge kích thước 13.4 inch mang tính biểu tượng, với viền siêu mỏng ở cả 4 cạnh giúp tối ưu hóa không gian hiển thị một cách tối đa, mang lại trải nghiệm thị giác vô cùng sống động và sắc nét. Bên trong ngoại hình mỏng nhẹ, thanh lịch được chế tác từ nhôm nguyên khối cứng cáp và sợi carbon là một cấu hình phần cứng cực kỳ mạnh mẽ. Máy sở hữu bộ vi xử lý Intel Core i7 thế hệ mới nhất, kết hợp cùng dung lượng bộ nhớ RAM lên đến 16GB, cho phép người dùng xử lý mượt mà mọi tác vụ đa nhiệm từ văn phòng cơ bản, duyệt hàng chục tab trình duyệt cùng lúc cho đến các tác vụ chỉnh sửa hình ảnh bán chuyên nghiệp. Bên cạnh đó, ổ cứng lưu trữ SSD dung lượng 512GB chuẩn NVMe tốc độ cao không chỉ mang lại không gian lưu trữ dữ liệu rộng rãi mà còn tăng tốc độ khởi động hệ điều hành và truy xuất ứng dụng chỉ trong vài giây ngắn ngủi. Bàn phím của Dell XPS 13 được thiết kế tràn cạnh mang lại cảm giác gõ êm ái, hành trình phím sâu và độ nảy tốt, kết hợp với touchpad lớn, nhạy bén giúp mọi thao tác vuốt chạm trở nên chính xác tuyệt đối. Thời lượng pin ấn tượng kéo dài suốt cả ngày làm việc cùng hệ thống tản nhiệt tiên tiến hoạt động êm ái là những điểm cộng vô giá giúp mẫu laptop này trở thành người bạn đồng hành hoàn hảo, lý tưởng cho những ai thường xuyên phải di chuyển.",
    status: "active"
  },
  {
    id: "p002",
    name: "MacBook Air M2",
    price: 28990000,
    currency: "VND",
    image: "../assets/macbook-air-m2.jpg",
    link: "chi-tiet.html",
    description: "MacBook Air M2 đánh dấu một bước chuyển mình mang tính đột phá lớn trong ngôn ngữ thiết kế và hiệu năng của dòng máy tính xách tay siêu mỏng nhẹ từ nhà Apple. Khởi đầu bằng việc loại bỏ hoàn toàn kiểu dáng vát mỏng hình nêm truyền thống, phiên bản này sở hữu diện mạo vuông vắn, hiện đại và đồng nhất hơn, lấy cảm hứng từ dòng MacBook Pro cao cấp nhưng vẫn duy trì độ mỏng và trọng lượng cực kỳ lý tưởng để dễ dàng nằm gọn trong ba lô của bạn. Trái tim của máy là bộ vi xử lý thế hệ mới Apple M2 được sản xuất trên tiến trình tiên tiến, mang lại hiệu suất CPU nhanh hơn 18% và GPU mạnh hơn tới 35% so với thế hệ M1 trước đó. Sức mạnh này giúp bạn dễ dàng chinh phục từ các công việc văn phòng thường nhật, học tập, lập trình cho đến việc biên tập và render các video độ phân giải 4K mà không hề gặp hiện tượng giật lag. Màn hình Liquid Retina kích thước 13.6 inch với thiết kế phần khuyết 'tai thỏ' thời thượng mở rộng không gian hiển thị, sở hữu độ sáng lên tới 500 nits và hỗ trợ dải màu rộng P3, mang đến những khung hình rực rỡ, trung thực và sống động đến từng chi tiết nhỏ nhất. Đặc biệt, nhờ kiến trúc tối ưu hóa năng lượng vượt trội của Apple Silicon, MacBook Air M2 sở hữu thời lượng pin đáng kinh ngạc lên đến 18 giờ liên tục, cho phép bạn thoải mái làm việc, giải trí cả ngày dài mà không cần lo lắng về việc mang theo bộ sạc. Hệ thống âm thanh 4 loa hỗ trợ công nghệ Spatial Audio mang lại không gian âm nhạc điện ảnh, kết hợp với camera FaceTime HD 1080p sắc nét và cổng sạc nam tính MagSafe tiện lợi, an toàn, biến chiếc máy này thành sự lựa chọn không thể tuyệt vời hơn cho học sinh, sinh viên và những người làm sáng tạo nội dung.",
    status: "active"
  },
  {
    id: "p003",
    name: "iPhone 15 Pro",
    price: 24990000,
    currency: "VND",
    image: "../assets/iphone15pro.jpg",
    link: "chi-tiet.html",
    description: "iPhone 15 Pro là một kiệt tác công nghệ đỉnh cao, đánh dấu bước nhảy vọt quan trọng của Apple trong việc ứng dụng vật liệu cao cấp vào ngành công nghiệp chế tạo điện thoại thông minh. Thiết bị sở hữu lớp vỏ ngoài được làm từ chất liệu chất liệu Titanium chuẩn hàng không vũ trụ siêu bền, siêu nhẹ, vừa mang lại diện mạo sang trọng, đẳng cấp vượt thời gian, vừa giúp giảm đáng kể trọng lượng của máy, tạo cảm giác cầm nắm nhẹ nhàng và vô cùng thoải mái trong lòng bàn tay. Mặt trước của máy được bảo vệ bởi lớp kính Ceramic Shield cứng cáp nhất thế giới smartphone hiện tại, kết hợp với phần viền màn hình được tinh chỉnh siêu mỏng để tối ưu hóa không gian hiển thị. Cung cấp sức mạnh hủy diệt cho iPhone 15 Pro là con chip Apple A17 Pro - bộ vi xử lý di động đầu tiên trên thế giới được sản xuất trên tiến trình 3nm tiên tiến, mang lại hiệu năng CPU và GPU vượt trội, sẵn sàng xử lý mượt mà các tựa game đồ họa nặng chuẩn console hiện nay cũng như tối ưu hóa các thuật toán trí tuệ nhân tạo thông minh. Hệ thống camera chuyên nghiệp trên máy cũng nhận được nâng cấp toàn diện với cảm biến chính lên đến 48MP, cho phép chụp ảnh độ phân giải siêu cao với chi tiết cực kỳ sắc nét, đi kèm khả năng kiểm soát tiêu cự linh hoạt và chế độ chụp đêm Night Mode cải tiến vượt bậc. Điểm đột phá không thể không nhắc đến chính là việc chuyển đổi sang cổng kết nối USB-C tốc độ cao chuẩn USB 3, giúp tăng tốc độ truyền tải dữ liệu lên gấp nhiều lần, cùng nút tác vụ Action Button hoàn toàn mới thay thế cho cần gạt rung truyền thống, cho phép người dùng tùy biến nhanh chóng để mở các ứng dụng hoặc tính năng yêu thích chỉ với một cú nhấn giữ tiện lợi.",
    status: "active"
  },
  {
    id: "p004",
    name: "Samsung Galaxy S24 Ultra",
    price: 29990000,
    currency: "VND",
    image: "../assets/galaxy-s24-ultra.jpg",
    link: "chi-tiet.html",
    description: "Samsung Galaxy S24 Ultra là định nghĩa hoàn hảo cho một chiếc smartphone flagship Android cao cấp, mở ra kỷ nguyên mới của trí tuệ nhân tạo di động với hệ sinh thái Galaxy AI vô cùng thông minh và tiện ích. Thiết bị thu hút mọi ánh nhìn nhờ ngôn ngữ thiết kế vuông vắn, mạnh mẽ mang tính biểu tượng, kết hợp với khung viền Titanium sang trọng, bền bỉ và mặt kính Corning Gorilla Armor thế hệ mới giúp giảm thiểu độ phản xạ ánh sáng đến 75% và chống trầy xước vượt trội. Siêu phẩm này sở hữu màn hình Dynamic AMOLED 2X kích thước lên đến 6.8 inch phẳng hoàn toàn, hỗ trợ độ phân giải QHD+ cùng tần số quét thích ứng 1-120Hz mượt mà, mang đến độ sáng tối đa đạt mức kỷ lục 2600 nits giúp mọi nội dung hiển thị rõ nét ngay cả dưới ánh nắng gay gắt ban ngày. Điểm nhấn làm nên tên tuổi của dòng Ultra chính là hệ thống camera quyền năng với cảm biến chính có độ phân giải siêu khủng lên tới 200MP, kết hợp với ống kính zoom quang học và thuật toán AI ProVisual, cho phép bạn bắt trọn mọi khoảnh khắc từ khoảng cách cực xa với độ chi tiết khó tin và khả năng chụp đêm siêu sáng rõ nét. Bên trong máy là bộ vi xử lý Snapdragon 8 Gen 3 for Galaxy được tối ưu hóa riêng biệt, mang lại hiệu năng xử lý đồ họa mạnh mẽ, kết hợp với hệ thống tản nhiệt buồng hơi lớn hơn gấp rưỡi giúp máy luôn mát mẻ khi chiến game hay xử lý đa nhiệm nặng. Chiếc bút S Pen thần thánh đi kèm được tích hợp sâu vào thân máy, mang lại trải nghiệm viết, vẽ tự nhiên như trên giấy và hỗ trợ đắc lực cho các tính năng AI đột phá như Khoanh vùng search đa năng (Circle to Search), Dịch thuật trực tiếp cuộc gọi theo thời gian thực hay Trợ lý ghi chú thông minh. Viên pin dung lượng lớn 5000mAh hỗ trợ sạc nhanh 45W đảm bảo thiết bị luôn sẵn sàng đồng hành cùng bạn suốt ngày dài năng động.",
    status: "active"
  },
  {
    id: "p005",
    name: "Sony WH-1000XM5",
    price: 8490000,
    currency: "VND",
    image: "../assets/sony-wh1000xm5.jpg",
    link: "chi-tiet.html",
    description: "Tai nghe chụp tai chống ồn chủ động Sony WH-1000XM5 đại diện cho đỉnh cao công nghệ âm thanh cá nhân, thiết lập một tiêu chuẩn hoàn toàn mới cho phân khúc tai nghe premium toàn cầu. Bước sang thế hệ thứ 5, Sony mang đến một cuộc cách mạng về thiết kế với kiểu dáng tối giản, thanh lịch, các đường nét bo cong mềm mại và sử dụng chất liệu da tổng hợp mềm mại ôm khít lấy tai, giúp phân bổ áp lực đồng đều để người dùng thoải mái đeo trong nhiều giờ liên tục mà không hề có cảm giác đau nhức hay bí bách. Khả năng chống ồn chủ động (ANC) vốn là thế mạnh của hãng nay đã được nâng lên một tầm cao mới nhờ việc trang bị tới 8 microphone xung quanh kết hợp với hai bộ xử lý độc quyền gồm chip chống ồn HD QN1 và chip tích hợp V1. Hệ thống này cho phép tự động tối ưu hóa tính năng chống ồn dựa trên môi trường xung quanh và điều kiện đeo của bạn, triệt tiêu hoàn toàn những tạp âm tần số cao từ tiếng còi xe, tiếng nói chuyện ồn ào nơi công cộng cho đến tiếng động cơ máy bay. Về mặt âm thanh, màng loa 30mm được thiết kế đặc biệt với phần vòm nhẹ và cứng làm từ chất liệu sợi carbon composite, giúp tái tạo dải âm trầm sâu lắng, uy lực và dải âm cao trong trẻo, chi tiết tuyệt đối, đáp ứng hoàn hảo tiêu chuẩn âm thanh phân giải cao Hi-Res Audio chuẩn không dây nhờ codec LDAC. Thiết bị còn sở hữu công nghệ Precise Voice Pickup với 4 micro dạng beamforming và thuật toán giảm tiếng ồn AI giúp giọng nói của bạn luôn rõ ràng trong các cuộc đàm thoại. Thời lượng pin cực khủng lên tới 30 giờ khi bật ANC và khả năng sạc nhanh siêu tốc 3 phút cho 3 giờ sử dụng giúp bạn hoàn toàn an tâm tận hưởng không gian âm nhạc riêng tư ở bất cứ nơi đâu.",
    status: "active"
  },
  {
    id: "p006",
    name: "Bose QuietComfort 45",
    price: 6990000,
    currency: "VND",
    image: "../assets/bose-qc45.jpg",
    link: "chi-tiet.html",
    description: "Bose QuietComfort 45 là sự kế thừa hoàn hảo của dòng tai nghe chống ồn huyền thoại đã làm nên tên tuổi của thương hiệu âm thanh cao cấp Bose, mang đến sự kết hợp tuyệt vời giữa khả năng triệt tiêu tiếng ồn vượt trội và sự thoải mái tối đa khi sử dụng. Thiết kế của dòng QuietComfort luôn được đánh giá cao nhờ tính công học đỉnh cao: trọng lượng tai nghe cực kỳ nhẹ, đệm tai bằng da tổng hợp cao cấp mềm mại, không gây áp lực lên vành tai và lực kẹp vừa vặn, cho phép người dùng đeo suốt cả ngày dài làm việc hay trên những chuyến bay xuyên lục địa mà không cảm thấy mệt mỏi. Bose QC45 sở hữu hai chế độ chống ồn cốt lõi mang lại trải nghiệm linh hoạt: Chế độ Yên lặng (Quiet Mode) sử dụng các micro ẩn để liên tục đo lường, so sánh và phản hồi các tiếng ồn bên ngoài, sau đó phát ra tín hiệu triệt tiêu chúng, trả lại cho bạn một không gian tĩnh lặng tuyệt đối để tập trung làm việc hoặc đắm chìm vào âm nhạc; trong khi đó, Chế độ Nhận biết (Aware Mode) cho phép các âm thanh từ môi trường xung quanh lọt vào tai một cách tự nhiên, giúp bạn dễ dàng nghe thấy thông báo nhà ga hoặc trò chuyện với mọi người xung quanh mà không cần phải tháo tai nghe. Chất âm của Bose QC45 mang đậm bản sắc của hãng với kiến trúc âm thanh TriPort độc quyền và công nghệ Volume-Optimized Active EQ, tự động cân bằng các dải âm trầm và âm cao tùy thuộc vào mức âm lượng bạn đang nghe, đảm bảo âm thanh luôn trung thực, đầy đặn và không bị méo tiếng. Với thời lượng pin cải tiến lên tới 24 giờ liên tục cho một lần sạc đầy cùng cổng sạc nhanh USB-C, chiếc tai nghe này là người bạn đồng hành không thể thiếu của những tín đồ dịch chuyển và người yêu âm thanh sạch.",
    status: "active"
  },
  {
    id: "p007",
    name: "Apple Watch Series 9",
    price: 10490000,
    currency: "VND",
    image: "../assets/apple-watch-series9.jpg",
    link: "chi-tiet.html",
    description: "Apple Watch Series 9 là thế hệ đồng hồ thông minh tiên tiến, không chỉ đóng vai trò là một món phụ kiện thời trang đẳng cấp mà còn là một trợ lý sức khỏe toàn diện và người bạn đồng hành đắc lực trong cuộc sống hiện đại. Điểm nâng cấp cốt lõi nằm ở bộ vi xử lý Silicon S9 hoàn toàn mới mạnh mẽ nhất từ trước đến nay của Apple, giúp các thao tác vuốt chạm, mở ứng dụng trở nên mượt mà, phản hồi tức thì và cho phép trợ lý ảo Siri xử lý các yêu cầu trực tiếp ngay trên đồng hồ mà không cần kết nối mạng internet. Nhờ chip xử lý mới này, Apple giới thiệu tính năng Chạm hai lần (Double Tap) vô cùng độc đáo: bạn chỉ cần chạm ngón trỏ và ngón cái của tay đeo đồng hồ vào nhau hai lần là đã có thể dễ dàng trả lời cuộc gọi, tắt báo thức, dừng nhạc hay chụp ảnh từ xa mà không cần chạm vào màn hình - một giải pháp cực kỳ tiện lợi khi tay bạn đang bận xách đồ hoặc nấu ăn. Màn hình Always-On Retina trên Series 9 sở hữu độ sáng tối đa lên tới 2000 nits, tăng gấp đôi so với thế hệ trước, giúp hiển thị văn bản rõ ràng dưới ánh nắng gay gắt, đồng thời có thể giảm xuống chỉ còn 1 nit trong phòng tối để tránh gây chói mắt. Về khía cạnh chăm sóc sức khỏe, thiết bị được tích hợp hệ thống cảm biến sinh học chuyên sâu bao gồm khả năng đo nồng độ oxy trong máu (SpO2), chụp điện tâm đồ (ECG), theo dõi chi tiết các chu kỳ giấc ngủ và cảm biến nhiệt độ hỗ trợ theo dõi sức khỏe phụ nữ một cách khoa học. Các tính năng an toàn như Phát hiện va chạm xe, Phát hiện té ngã và SOS khẩn cấp luôn hoạt động âm thầm để bảo vệ bạn trong những tình huống nguy cấp. Hơn thế nữa, Series 9 cũng là sản phẩm trung hòa carbon đầu tiên của Apple, thể hiện cam kết mạnh mẽ trong việc bảo vệ môi trường toàn cầu.",
    status: "active"
  },
  {
    id: "p008",
    name: "Samsung Galaxy Tab S9",
    price: 19990000,
    currency: "VND",
    image: "../assets/galaxy-tab-s9.jpg",
    link: "chi-tiet.html",
    description: "Samsung Galaxy Tab S9 thiết lập lại định nghĩa về một chiếc máy tính bảng Android phân khúc cao cấp, kết hợp hài hòa giữa không gian giải trí đỉnh cao và công cụ hỗ trợ công việc chuyên nghiệp hàng đầu. Thiết bị sở hữu thân máy siêu mỏng được chế tác từ chất liệu nhôm Armor Aluminum cực kỳ cứng cáp, mang lại vẻ ngoài tinh tế, sang trọng nhưng vẫn đảm bảo độ bền bỉ cao trước các va đập vật lý. Đây cũng là một trong những dòng máy tính bảng cao cấp đầu tiên trên thế giới đạt tiêu chuẩn kháng nước và kháng bụi IP68, mang đến sự an tâm tuyệt đối cho người dùng khi sử dụng ở các môi trường hồ bơi, bãi biển hay quán cà phê. Mặt trước của Galaxy Tab S9 là không gian hiển thị tuyệt mỹ của màn hình Dynamic AMOLED 2X kích thước 11 inch, hỗ trợ tần số quét thích ứng 120Hz mượt mà và công nghệ HDR10+, mang lại những dải màu sắc rực rỡ, độ tương phản sâu thẳm cùng sắc đen tuyệt đối, biến mọi bộ phim bom tấn hay tựa game đồ họa trở thành một bữa tiệc thị giác sống động. Cung cấp sức mạnh cho máy là bộ vi xử lý Snapdragon 8 Gen 2 for Galaxy dẫn đầu về hiệu năng, cho phép xử lý đa nhiệm cực kỳ mượt mà, render video nhanh chóng và chạy mượt các ứng dụng đồ họa nặng. Chiếc bút S S Pen quyền năng đi kèm trong hộp cũng đạt chuẩn IP68, sở hữu độ trễ cực thấp mang lại cảm giác viết vẽ chân thực như trên giấy, kết hợp cùng giao diện độc quyền Samsung DeX giúp biến đổi linh hoạt không gian máy tính bảng thành một giao diện máy tính cá nhân truyền thống khi kết hợp với bao da bàn phím, đáp ứng tối đa nhu cầu học tập, làm việc và sáng tạo không giới hạn của bạn.",
    status: "active"
  },
  {
    id: "p009",
    name: "iPad Pro M2",
    price: 26990000,
    currency: "VND",
    image: "../assets/ipad-pro-m2.jpg",
    link: "chi-tiet.html",
    description: "iPad Pro M2 là dòng máy tính bảng mạnh mẽ và tối tân hàng đầu thế giới, xóa nhòa ranh giới giữa một thiết bị di động nhỏ gọn và một chiếc máy tính xách tay chuyên nghiệp dành cho các nhà sáng tạo nội dung, kiến trúc sư và kỹ sư đồ họa. Sức mạnh vượt trội của máy được thúc đẩy bởi con chip Apple M2 sở hữu CPU 8 nhân và GPU 10 nhân, mang lại hiệu năng xử lý tác vụ đồ họa, mã hóa video ProRes nhanh hơn gấp nhiều lần và xử lý các mô hình 3D phức tạp một cách dễ dàng mà không một chiếc máy tính bảng nào khác trên thị trường có thể sánh kịp. Phiên bản màn hình Liquid Retina XDR kích thước 12.9 inch sử dụng công nghệ tấm nền với hàng ngàn bóng đèn mini-LED độc lập, mang lại độ sáng toàn màn hình lên tới 1000 nits và độ sáng tối đa đạt 1600 nits khi hiển thị các nội dung HDR, mang đến tỷ lệ tương phản cực cao 1.000.000:1, giúp hiển thị chính xác từng sắc độ màu sắc, độ chi tiết sâu thẳm của vùng tối và vùng sáng, phục vụ hoàn hảo cho công việc chỉnh sửa ảnh chuyên nghiệp và dựng phim nghệ thuật. Điểm cải tiến độc đáo trên thế hệ này là tính năng Apple Pencil Hover (lướt bút), cho phép màn hình phát hiện đầu bút Apple Pencil thế hệ 2 khi cách bề mặt đến 12mm, giúp người dùng xem trước độ đậm nhạt của nét vẽ hoặc vùng chọn ứng dụng một cách trực quan, chính xác trước khi đặt bút xuống. Hệ thống camera chuyên nghiệp tích hợp cảm biến LiDAR giúp quét không gian 3D nâng cao ứng dụng thực tế ảo tăng cường (AR), đi kèm cổng kết nối Thunderbolt tốc độ cao hỗ trợ truyền tải dữ liệu dung lượng lớn và xuất hình ảnh ra màn hình rời độ phân giải lên đến 6K, biến iPad Pro M2 thành một trạm làm việc di động thực thụ.",
    status: "active"
  },
  {
    id: "p010",
    name: "Kindle Paperwhite",
    price: 3690000,
    currency: "VND",
    image: "../assets/kindle-paperwhite.jpg",
    link: "chi-tiet.html",
    description: "Kindle Paperwhite là người bạn đồng hành lý tưởng và là sự lựa chọn hàng đầu của những mọt sách chân chính trên toàn thế giới, mang đến một trải nghiệm đọc sách kỹ thuật số hoàn hảo tuyệt đối như đang lật mở từng trang sách giấy truyền thống. Thiết bị sở hữu màn hình hiển thị kích thước lớn 6.8 inch với mật độ điểm ảnh đạt chuẩn 300 ppi, sử dụng công nghệ mực điện tử E-ink độc quyền giúp hiển thị chữ viết, hình ảnh vô cùng sắc nét, rõ ràng và hoàn toàn không bị hiện tượng lóa mờ ngay cả khi bạn đọc sách dưới ánh nắng trực tiếp của mặt trời ban ngày. Không giống như màn hình của điện thoại hay máy tính bảng thông thường sử dụng đèn nền chiếu thẳng vào mắt gây mỏi và nhức mắt, Kindle Paperwhite sử dụng hệ thống đèn LED chiếu cạnh phân bổ ánh sáng đều khắp bề mặt màn hình, kết hợp với tính năng điều chỉnh nhiệt độ màu từ ánh sáng trắng mát sang ánh sáng vàng ấm áp, giúp bảo vệ thị lực tối đa và mang lại cảm giác dễ chịu, thư thái khi đọc sách trong phòng tối trước khi đi ngủ. Thiết bị được trang bị khả năng chống nước đạt tiêu chuẩn IPX8 cao cấp, cho phép máy chịu đựng được việc ngâm nước ở độ sâu lên đến 2 mét trong vòng 60 phút, giúp bạn hoàn toàn an tâm mang theo sách để thư giãn bên cạnh hồ bơi, trong bồn tắm hay trên bãi biển mà không lo ngại sự cố đổ nước. Điểm ăn tiền lớn nhất của máy chính là thời lượng sử dụng pin siêu khủng: chỉ với một lần sạc đầy qua cổng USB-C tiện lợi, bạn có thể thoải mái đọc sách suốt nhiều tuần liên tục mà không cần bận tâm đến việc tìm ổ cắm sạc. Bộ nhớ trong rộng rãi cho phép lưu trữ hàng ngàn cuốn sách phong phú cùng trọng lượng máy cực kỳ nhẹ giúp bạn dễ dàng cầm đọc bằng một tay trong thời gian dài.",
    status: "active"
  },
  {
    id: "p011",
    name: "Logitech MX Master 3S",
    price: 2490000,
    currency: "VND",
    image: "../assets/logitech-mx-master-3s.jpg",
    link: "chi-tiet.html",
    description: "Logitech MX Master 3S là dòng chuột không dây công thái học cao cấp được sinh ra để dành riêng cho các lập trình viên, nhà thiết kế đồ họa và những người làm việc văn phòng chuyên nghiệp đòi hỏi hiệu suất và độ chính xác tối đa trong công việc hàng ngày. Thiết kế của chuột được nghiên cứu kỹ lưỡng để ôm khít hoàn toàn vào lòng bàn tay người dùng, nâng đỡ phần cổ tay và ngón cái một cách tự nhiên nhất, giúp giảm thiểu đáng kể tình trạng mỏi cơ hay hội chứng ống cổ tay khi phải làm việc liên tục trước màn hình máy tính suốt nhiều giờ. Nâng cấp đáng giá nhất trên phiên bản 3S chính là công nghệ click chuột yên tĩnh (Quiet Clicks), giúp giảm đến 90% tiếng ồn phát ra khi bấm so với thế hệ trước nhưng vẫn giữ lại cảm giác phản hồi xúc giác bấm phím cực kỳ nảy và chắc chắn, tạo không gian làm việc tĩnh lặng, tập trung cho bạn và mọi người xung quanh. Chuột sở hữu cảm biến quang học Darkfield có độ phân giải siêu cao lên tới 8000 DPI, cho phép thiết bị di chuyển mượt mà, chính xác tuyệt đối trên hầu hết mọi bề mặt chất liệu khác nhau, bao gồm cả những mặt bàn bằng kính bóng loáng vốn là kẻ thù của các loại chuột thông thường. Điểm nhấn làm nên huyền thoại của dòng MX Master chính là con lăn MagSpeed được chế tác bằng thép gia công cơ khí, có khả năng cuộn siêu nhanh 1000 dòng chỉ trong vòng một giây hoặc cuộn từng dòng chính xác đến từng pixel bằng lực nam châm điện từ trường. Con lăn phụ ở ngón cái hỗ trợ cuộn ngang màn hình cực kỳ tiện lợi khi xử lý các bảng tính Excel dài hay dòng thời gian edit video. Chuột hỗ trợ kết nối đồng thời và chuyển đổi linh hoạt giữa 3 thiết bị khác nhau thông qua công nghệ Bluetooth hoặc đầu thu Logi Bolt, kết hợp phần mềm Logi Options+ cho phép tùy biến chức năng nút bấm cho từng ứng dụng cụ thể.",
    status: "active"
  },
  {
    id: "p012",
    name: "Razer BlackWidow V4",
    price: 4390000,
    currency: "VND",
    image: "../assets/razer-blackwidow-v4.jpg",
    link: "chi-tiet.html",
    description: "Razer BlackWidow V4 là mẫu bàn phím cơ chơi game cao cấp được thiết kế để mang lại lợi thế cạnh tranh tuyệt đối cho các game thủ chuyên nghiệp cũng như trải nghiệm gõ phím đỉnh cao cho những người đam mê phần cứng máy tính. Bàn phím sở hữu bộ khung vỏ mặt trên được làm từ hợp kim nhôm cấp tàu thủy vô cùng chắc chắn và bền bỉ, kết hợp với lớp hoàn thiện màu đen mờ sang trọng, mạnh mẽ giúp chịu đựng tốt áp lực từ những trận chiến game căng thẳng nhất. Trái tim của bàn phím là hệ thống Switch cơ học Razer Green độc quyền, mang lại cảm giác gõ phím đậm chất cơ học với phản hồi xúc giác rõ ràng (tactile) kèm theo tiếng click nghe cực kỳ vui tai và đã tay, sở hữu tuổi thọ lên tới 80 triệu lần nhấn giúp đảm bảo độ bền vững cửu theo thời gian. Hệ thống chiếu sáng đèn LED RGB Razer Chroma độc quyền trên mỗi phím bấm và dải đèn viền gầm (underglow) hai bên hông tạo ra những hiệu ứng ánh sáng rực rỡ, lung linh với khả năng đồng bộ hóa linh hoạt theo các sự kiện diễn ra trong hơn 200 tựa game tương thích phổ biến hiện nay. Razer BlackWidow V4 được trang bị hàng phím macro chuyên dụng ở cạnh trái, cho phép game thủ dễ dàng gán các tổ hợp phím phức tạp hoặc lệnh chức năng để tung chiêu nhanh chóng trong các tựa game MOBA hay MMORPG. Con lăn đa năng lớn bằng kim loại cùng hệ thống các phím điều khiển media chuyên dụng ở góc trên bên phải giúp bạn dễ dàng tăng giảm âm lượng, tua nhanh bài hát hay điều chỉnh độ sáng màn hình chỉ trong nháy mắt. Đi kèm sản phẩm là một tấm đệm kê tay bằng chất liệu da mềm cao cấp có khả năng bám dính chắc chắn vào bàn phím, mang lại sự nâng đỡ êm ái hoàn hảo cho cổ tay của bạn khi sử dụng suốt thời gian dài.",
    status: "active"
  },
  {
    id: "p013",
    name: "Sony PlayStation 5",
    price: 12490000,
    currency: "VND",
    image: "../assets/ps5.jpg",
    link: "chi-tiet.html",
    description: "Sony PlayStation 5 (PS5) là cỗ máy chơi game thế hệ mới mang tính cách mạng, thay đổi hoàn toàn bộ mặt của ngành công nghiệp giải trí gia đình và đưa trải nghiệm chơi game của game thủ lên một tầm cao mới chưa từng có. Thiết bị thu hút mọi ánh nhìn ngay từ lần đầu tiên nhờ ngôn ngữ thiết kế tương lai mang tính đột phá mạnh mẽ với các đường cong mềm mại màu trắng thanh lịch ôm lấy phần thân máy màu đen huyền bí, tạo nên một điểm nhấn nội thất công nghệ vô cùng sang trọng trong phòng khách của bạn. Sức mạnh phần cứng bên trong PS5 cực kỳ đáng nể với CPU và GPU tùy biến dựa trên kiến trúc Zen 2 và RDNA 2 tiên tiến của AMD, hỗ trợ công nghệ Ray Tracing (dò tia ánh sáng) phần cứng để tái tạo các hiệu ứng phản chiếu ánh sáng, đổ bóng và mặt nước vô cùng chân thực, sống động như ngoài đời thực. Điểm đột phá lớn nhất của PS5 chính là ổ cứng lưu trữ SSD siêu tốc dung lượng 825GB chuẩn NVMe độc quyền, sở hữu tốc độ truyền dữ liệu nhanh đến mức chóng mặt, giúp triệt tiêu hoàn toàn thời gian chờ đợi tải game (loading screen) truyền thống và cho phép các nhà phát triển thiết kế nên những thế giới game mở rộng lớn, liền mạch không một vết gợn. Máy hỗ trợ xuất hình ảnh độ phân giải 4K sắc nét ở tốc độ khung hình lên tới 120 khung hình trên giây (fps) mượt mà, mang đến trải nghiệm chiến game hành động hay đua xe vô cùng mãn nhãn. Đi kèm với cỗ máy là tay cầm điều khiển không dây DualSense huyền thoại, được tích hợp công nghệ phản hồi xúc giác (Haptic Feedback) và cụm nút kích hoạt thích ứng (Adaptive Triggers), cho phép người dùng cảm nhận rõ nét từng lực kéo của dây cung, độ giật của súng hay cảm giác bánh xe trượt trên vũng bùn lầy, mang lại trải nghiệm nhập vai sâu sắc.",
    status: "active"
  },
  {
    id: "p014",
    name: "Xbox Series X",
    price: 12990000,
    currency: "VND",
    image: "../assets/xbox-series-x.jpg",
    link: "chi-tiet.html",
    description: "Xbox Series X là cỗ máy chơi game gia đình mạnh mẽ nhất thế giới hiện nay đến từ gã khổng lồ công nghệ Microsoft, mang đến một định nghĩa mới về hiệu năng xử lý đồ họa tối thượng và tốc độ vận hành đỉnh cao cho cộng đồng game thủ toàn cầu. Thiết bị sở hữu ngôn ngữ thiết kế tối giản nhưng vô cùng táo bạo với hình khối hộp chữ nhật nguyên khối màu đen nhám mạnh mẽ, giống như một tòa tháp công nghệ uy lực, kết hợp với hệ thống tản nhiệt sáng tạo gồm một quạt lớn ở đỉnh máy hoạt động cực kỳ êm ái, giúp duy trì nhiệt độ mát mẻ tối ưu cho toàn bộ linh kiện bên trong ngay cả khi xử lý các tựa game nặng ký nhất. Với sức mạnh xử lý đồ họa lên đến 12 Teraflops được cung cấp bởi cấu trúc vi xử lý RDNA 2 và Zen 2 tùy biến của AMD, Xbox Series X sẵn sàng mang đến trải nghiệm chơi game độ phân giải 4K thực tế với tốc độ khung hình ổn định ở mức 60fps, thậm chí hỗ trợ lên tới 120fps cho các tựa game thể thao điện tử đòi hỏi phản xạ nhanh. Kiến trúc làm lạnh sáng tạo cùng ổ cứng SSD NVMe tốc độ cao Custom 1TB kết hợp chặt chẽ với giải pháp phần mềm Xbox Velocity Architecture, mang lại tính năng Quick Resume vô cùng bá đạo: cho phép bạn tạm dừng và chuyển đổi qua lại giữa nhiều tựa game khác nhau gần như ngay lập tức chỉ trong vài giây mà không cần phải tải lại từ đầu. Máy cũng hỗ trợ đầy đủ các công nghệ hình ảnh tiên tiến nhất hiện nay như DirectX Raytracing phần cứng giúp tái tạo ánh sáng môi trường chân thực, Dolby Vision và Dolby Atmos mang lại bữa tiệc âm thanh vòm sống động như rạp chiếu phim. Khi kết hợp với gói dịch vụ đăng ký Xbox Game Pass, bạn sẽ có quyền truy cập ngay lập tức vào kho tàng hàng trăm tựa game bom tấn đỉnh cao.",
    status: "active"
  },
  {
    id: "p015",
    name: "Nintendo Switch OLED",
    price: 8190000,
    currency: "VND",
    image: "../assets/switch-oled.jpg",
    link: "chi-tiet.html",
    description: "Nintendo Switch OLED là phiên bản nâng cấp toàn diện và đáng giá nhất của dòng máy chơi game lai (hybrid) vô cùng thành công đến từ nhà Nintendo, mang đến một trải nghiệm chơi game di động rực rỡ và sống động hơn bao giờ hết cho mọi lứa tuổi game thủ. Thay đổi mang tính lịch sử và đắt giá nhất của phiên bản này chính là việc trang bị màn hình công nghệ OLED kích thước lớn 7 inch với phần viền màn hình được thu gọn siêu mỏng. Màn hình OLED mới mang lại những dải màu sắc vô cùng rực rỡ, độ tương phản cực kỳ cao cùng sắc đen sâu thẳm, giúp các thế giới kỳ ảo trong game như Zelda, Mario hay Pokémon hiện lên lung linh, đẹp mắt và có chiều sâu hơn rất nhiều so với tấm nền LCD truyền thống trên các thế hệ cũ. Thiết bị vẫn duy trì thiết kế linh hoạt độc nhất vô nhị làm nên thương hiệu của dòng Switch: cho phép bạn dễ dàng chuyển đổi linh hoạt giữa 3 chế độ chơi khác nhau bao gồm chế độ Cầm tay (Handheld) để chơi game khi đang di chuyển trên tàu xe; chế độ Để bàn (Tabletop) nhờ phần chân đế giữ máy bản rộng phía sau đã được thiết kế lại chắc chắn hơn, cho phép tùy chỉnh nhiều góc nghiêng khác nhau để bạn cùng bạn bè cùng giải trí; và chế độ Tivi (TV Mode) bằng cách đặt máy vào bộ dock kết nối đi kèm để xuất hình ảnh lên màn hình lớn phòng khách. Bộ dock của phiên bản OLED này cũng được nâng cấp đáng giá khi tích hợp thêm cổng mạng LAN có dây, giúp đảm bảo đường truyền internet luôn ổn định mượt mà khi bạn tham gia các trận chiến trực tuyến nảy lửa. Hệ thống loa tích hợp trên thân máy cũng được tinh chỉnh để mang lại âm thanh rõ ràng, sống động hơn, kết hợp với bộ nhớ trong được nhân đôi lên dung lượng 64GB giúp bạn thoải mái lưu trữ dữ liệu.",
    status: "active"
  },
  {
    id: "p016",
    name: "DJI Mini 3 Pro",
    price: 18490000,
    currency: "VND",
    image: "../assets/dji-mini-3-pro.jpg",
    link: "chi-tiet.html",
    description: "DJI Mini 3 Pro là một bước đột phá vĩ đại trong phân khúc flycam (máy bay không người lái chụp hình từ trên cao) siêu nhẹ, định nghĩa lại những gì mà một thiết bị bay kích thước bỏ túi có thể làm được cho giới làm phim và chụp ảnh chuyên nghiệp lẫn bán chuyên. Điểm cộng lớn nhất của Mini 3 Pro nằm ở thiết kế cánh gập vô cùng nhỏ gọn với trọng lượng siêu nhẹ dưới 250 gram - một con số kỳ diệu giúp người dùng có thể thoải mái cất giữ trong túi áo và dễ dàng vượt qua các quy định pháp lý nghiêm ngặt về việc đăng ký bay tại nhiều quốc gia trên thế giới. Dù có thân hình nhỏ bé, chiếc flycam này sở hữu hệ thống camera quyền năng với cảm biến hình ảnh CMOS kích thước lớn 1/1.3 inch, khẩu độ mở rộng f/1.7 và công nghệ ISO Native kép, cho phép quay video độ phân giải cao lên đến 4K HDR ở tốc độ 60 khung hình/giây và chụp ảnh tĩnh 48MP với độ chi tiết sắc nét, dải nhạy sáng cực rộng cùng khả năng khử nhiễu ấn tượng khi quay đêm. Thiết kế cụm gimbal chống rung 3 trục tân tiến trên máy cho phép xoay dọc camera góc 90 độ hoàn toàn mới (True Vertical Shooting), giúp bạn dễ dàng sáng tạo các nội dung video định dạng dọc chất lượng cao để chia sẻ ngay lập tức lên các nền tảng mạng xã hội như TikTok hay Instagram mà không bị mất độ phân giải do cắt cúp. Hệ thống an toàn trên Mini 3 Pro cũng được nâng cấp toàn diện với cảm biến tránh chướng ngại vật ba hướng (Phía trước, Phía sau và Phía dưới), kết hợp hệ thống hỗ trợ phi công tiên tiến APAS 4.0 giúp máy tự động phát hiện và bay vòng qua các vật cản một cách thông minh, mang lại sự an tâm tuyệt đối khi bay. Thời lượng bay ấn tượng lên tới 34 phút liên tục cho phép bạn thỏa sức săn lùng những góc quay điện ảnh từ trên cao.",
    status: "active"
  },
  {
    id: "p017",
    name: "GoPro Hero 12",
    price: 9990000,
    currency: "VND",
    image: "../assets/gopro-hero12.jpg",
    link: "chi-tiet.html",
    description: "GoPro Hero 12 Black là dòng camera hành trình (action camera) đỉnh cao nhất thế giới hiện nay, được xem là biểu tượng không thể thay thế dành cho các vận động viên thể thao mạo hiểm, các vlogger du lịch và những người đam mê ghi lại những khoảnh khắc hành động kịch tính trong cuộc sống. Thiết bị gây ấn tượng mạnh mẽ với khả năng quay video độ phân giải siêu khủng lên tới 5.3K ở tốc độ 60 khung hình/giây hoặc 4K ở tốc độ 120 khung hình/giây cho các thước phim slow-motion (quay chậm) vô cùng nghệ thuật và mượt mà đến từng chi tiết nhỏ. Trái tim của máy là cảm biến hình ảnh kích thước lớn mang lại tỷ lệ khung hình độc đáo 8:7, cho phép bạn thoải mái cắt cúp video thành nhiều định dạng dọc hoặc ngang khác nhau sau khi quay mà không lo bị giảm chất lượng hình ảnh. Điểm làm nên thương hiệu của GoPro chính là công nghệ chống rung kỹ thuật số HyperSmooth nay đã bước sang thế hệ 6.0 đạt giải thưởng Emmy, kết hợp với tính năng khóa đường chân trời 360 độ (Horizon Lock), đảm bảo mọi thước phim của bạn luôn ổn định, phẳng phiu mượt mà như đang sử dụng thiết bị chống rung chuyên nghiệp, bất kể bạn đang chạy bộ, đạp xe địa hình gồ ghề hay thực hiện các cú lộn nhào trên không trung. GoPro Hero 12 được tối ưu hóa vượt trội về hệ thống quản lý điện năng, giúp kéo dài thời gian quay video liên tục lên gấp đôi so với thế hệ tiền nhiệm khi kết hợp với viên pin Enduro chịu nhiệt tốt. Thân máy được thiết kế siêu bền bỉ, có khả năng chống va đập mạnh và chống nước hoàn toàn ở độ sâu lên đến 10 mét mà không cần vỏ bảo vệ, sẵn sàng cùng bạn chinh phục mọi môi trường khắc nghiệt từ núi cao tuyết phủ cho đến lòng đại dương sâu thẳm.",
    status: "active"
  },
  {
    id: "p018",
    name: "Canon EOS R7",
    price: 36990000,
    currency: "VND",
    image: "../assets/canon-eos-r7.jpg",
    link: "chi-tiet.html",
    description: "Canon EOS R7 là mẫu máy ảnh không gương lật (mirrorless) sử dụng cảm biến APS-C cao cấp nhất thuộc hệ sinh thái EOS R danh tiếng của Canon, mang đến sự kết hợp hoàn hảo giữa tốc độ xử lý thần tốc, độ phân giải cao và tính linh động tuyệt vời cho các nhiếp ảnh gia chuyên chụp động vật hoang dã, thể thao tốc độ và phóng sự chuyên nghiệp. Máy được trang bị cảm biến CMOS APS-C có độ phân giải ấn tượng lên đến 32.5 megapixel hoàn toàn mới, kết hợp chặt chẽ với bộ xử lý hình ảnh DIGIC X quyền năng, giúp mang lại những bức ảnh có chi tiết cực kỳ sắc nét, màu sắc trung thực ấm áp đặc trưng của Canon và khả năng kiểm soát nhiễu hạt (noise) xuất sắc ở dải ISO cao. Điểm đắt giá nhất trên EOS R7 chính là hệ thống lấy nét tự động Dual Pixel CMOS AF II được thừa hưởng từ dòng máy full-frame đầu bảng, tích hợp thuật toán trí tuệ nhân tạo học sâu (Deep Learning) cho phép tự động nhận diện, tracking (bám đuổi) theo ánh mắt, khuôn mặt của con người, động vật (chó, mèo, chim) và các phương tiện giao thông (xe đua, máy bay) với độ chính xác và tốc độ đáng kinh ngạc, ngay cả khi đối tượng đang di chuyển một cách hỗn loạn. Về tốc độ chụp, máy có khả năng chụp liên tiếp lên tới 15 khung hình/giây với màn trập cơ học và đạt mức không tưởng 30 khung hình/giây với màn trập điện tử hoàn toàn im lặng, giúp bạn không bỏ lỡ bất kỳ khoảnh khắc đắt giá nào. Hệ thống chống rung thân máy (IBIS) 5 trục phối hợp nhịp nhàng với chống rung trên ống kính mang lại khả năng bù trừ rung lắc lên đến 8 stop, cho phép bạn dễ dàng chụp ảnh phơi sáng cầm tay hoặc quay video 4K UHD chất lượng cao cực kỳ mượt mà mà không cần đến gimbal chống rung hỗ trợ.",
    status: "active"
  },
  {
    id: "p019",
    name: "Samsung 4K Smart TV 55\"",
    price: 11490000,
    currency: "VND",
    image: "../assets/samsung-4k-tv.jpg",
    link: "chi-tiet.html",
    description: "Smart TV Samsung 4K 55 inch mang đến một không gian giải trí đỉnh cao ngay tại phòng khách ngôi nhà bạn, biến mỗi giờ phút quây quần của gia đình thành một trải nghiệm điện ảnh sống động, chân thực khó quên. Thiết bị sở hữu ngôn ngữ thiết kế ba cạnh không viền (Boundless Design) vô cùng tinh tế, giúp mở rộng tối đa tầm nhìn của mắt và dễ dàng hòa mình vào mọi phong cách không gian nội thất hiện đại từ tối giản cho đến sang trọng. Với độ phân giải Ultra HD 4K sắc nét gấp 4 lần so với TV Full HD thông thường, kết hợp cùng công nghệ tái tạo màu sắc PurColor, chiếc tivi này có khả năng hiển thị dải màu sắc vô cùng phong phú, rực rỡ và tự nhiên trong từng khung hình. Bộ vi xử lý Crystal 4K thông minh tự động phân tích và nâng cấp mọi nội dung nguồn vào có độ phân giải thấp lên chuẩn cận 4K, giúp tối ưu hóa độ tương phản và chi tiết hình ảnh. Công nghệ HDR10+ tiên tiến tăng cường độ sáng vượt trội, cho phép bạn thưởng thức trọn vẹn từng chi tiết ẩn sâu trong các vùng tối tăm nhất hoặc các vùng sáng chói của bộ phim. Về âm thanh, công nghệ Object Tracking Sound Lite (OTS Lite) giả lập âm thanh vòm chuyển động theo dấu vết của vật thể trên màn hình, kết hợp tính năng Q-Symphony đồng bộ loa TV với loa thanh bên ngoài để tạo nên một không gian âm thanh bùng nổ, mạnh mẽ bao trùm toàn bộ căn phòng. Hệ điều hành Tizen OS độc quyền có giao diện phẳng hiện đại, mượt mà và dễ sử dụng, mở ra kho ứng dụng giải trí khổng lồ phong phú như YouTube, Netflix, VieON, đáp ứng trọn vẹn mọi nhu cầu giải trí, xem phim, nghe nhạc của từng thành viên trong gia đình bạn.",
    status: "active"
  },
  {
    id: "p020",
    name: "LG OLED C4 65\"",
    price: 48990000,
    currency: "VND",
    image: "../assets/lg-oled-c4.jpg",
    link: "chi-tiet.html",
    description: "TV LG OLED C4 65 inch là một tuyệt tác công nghệ hiển thị đỉnh cao thế hệ mới, tái định nghĩa chuẩn mực giải trí xa xỉ và mang đến một rạp chiếu phim chuẩn Hollywood thực thụ ngay trong không gian sống của bạn. Trái tim làm nên sự khác biệt của chiếc tivi này chính là công nghệ tấm nền OLED evo cải tiến vượt bậc với các điểm ảnh tự phát sáng độc lập hoàn toàn, không cần sử dụng hệ thống đèn nền như tivi LED truyền thống. Kết hợp với tính năng Brightness Booster, LG OLED C4 mang lại độ sáng vượt trội so với thế hệ tiền nhiệm, cho khả năng tắt hoàn toàn các điểm ảnh để tạo ra sắc đen tuyệt đối 100%, mang lại tỷ lệ tương phản vô cực và làm nổi bật các dải màu sắc rực rỡ, trung thực một cách kinh ngạc. Sức mạnh xử lý của tivi được thúc đẩy bởi bộ vi xử lý AI alpha 9 Thế hệ 7 độc quyền của LG, ứng dụng các thuật toán trí tuệ nhân tạo chuyên sâu để tự động nhận diện khuôn mặt, vật thể, nâng cấp hình ảnh và âm thanh tối ưu theo từng thể loại nội dung lên chuẩn 4K tuyệt mỹ. Công nghệ Dolby Vision và Dolby Atmos kết hợp hoàn hảo mang lại trải nghiệm điện ảnh đa giác quan bùng nổ với hình ảnh rực rỡ sắc nét và hệ thống âm thanh vòm điện ảnh ảo 9.1.2 sống động bao bọc xung quanh bạn. Đối với các game thủ chuyên nghiệp, LG OLED C4 là chiếc tivi mơ ước độc nhất vô nhị khi nâng cấp tần số quét lên tới 144Hz siêu mượt mà, thời gian phản hồi kỷ lục chỉ 0.1ms, đi kèm các công nghệ đồng bộ khung hình hàng đầu là NVIDIA G-Sync và AMD FreeSync Premium, giúp triệt tiêu hoàn toàn hiện tượng xé hình hay giật lag khi chiến các tựa game console thế hệ mới hoặc PC gaming trên màn hình lớn 65 inch cực đại.",
    status: "active"
  }
];

//cho phép các file khác sử dụng dữ liệu trong file này thông qua import
export default defaultproducts;