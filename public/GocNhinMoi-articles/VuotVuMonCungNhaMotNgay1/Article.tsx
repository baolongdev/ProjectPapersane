import { Typography } from "@mui/material"
import React from "react";
import { useState, useEffect } from 'react'

function Article() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  function ImgSection({ src }: { src: string }) {
    return <img src={src} style={{ alignSelf: "center", width: calculateImageWidth() }} />
  }
  
  function HeadingSection({ children }: { children: React.ReactNode }) {
    return (
      <Typography variant="h4" align="center" fontFamily="Barlow, serif" color="black" fontWeight="normal">
        {children}
      </Typography>
    )
  }
  
  function BodyTextSection({ children }: { children: React.ReactNode }) {
    return (
      <Typography variant="h6" fontFamily="Barlow, serif" color="black" fontWeight="normal">
        {children}
      </Typography>
    )
  }

  useEffect(() => {
    // Update the screen width on window resize
    const handleResize = () => {
      console.log('resized bro')
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const calculateImageWidth = () => {
    if (screenWidth >= 900) {
      const maxWidth = 800
      const minWidth = 400
      const maxScreenWidth = 1920
      const minScreenWidth = 900
      // formula to make pic width scale linearly with screen width
      const width = ((screenWidth - minScreenWidth) / (maxScreenWidth - minScreenWidth)) * (maxWidth - minWidth) + minWidth
      return Math.round(width)
    }
    else {
      const maxWidth = 500
      const minWidth = 300
      const maxScreenWidth = 750
      const minScreenWidth = 320
      // formula to make pic width scale linearly with screen width
      const width = ((screenWidth - minScreenWidth) / (maxScreenWidth - minScreenWidth)) * (maxWidth - minWidth) + minWidth
      return Math.round(width)
    }
  };

  return (
    <>
      <HeadingSection>🍭 50 SẮC THÁI - “MỌT” CHẲNG NGẦN NGẠI 🍭</HeadingSection>

      <BodyTextSection>
        Mùa thi lại một lần nữa đến gần và các thành viên nhà “mọt” lại đang “vùi mình” trong deadline và chồng đề cương? Bạn đang lo lắng, stress và chán nản?
        Đừng lo! Giờ chính là lúc bạn nên tạm gác qua phiền muộn để thả cảm xúc của mình trôi theo những cuốn sách rồi đấy! Mỗi chi tiết, mỗi câu chuyện trong
        từng quyển sách đều đem lại cho chúng mình những cảm xúc khác nhau, đôi khi chân thật như chính ta đang sống cuộc đời của một nhân vật nào đó, bởi thế
        George R.R Martin mới có câu “Một người hay đọc sách sống hàng ngàn cuộc đời khác nhau.” Sau một ngày dài còn gì tuyệt vời hơn khi ngồi “gặm nhấm” từng
        trang sách một và tận hưởng từng cung bậc cảm xúc mà những con chữ, dòng văn mang lại. Những cung bậc cảm xúc ấy là gì, “hội mọt” hãy cùng Papersane tìm
        hiểu ngay sau đây nhé!
      </BodyTextSection>

      <ImgSection src="\GocNhinMoi-articles\VuotVuMonCungNhaMotNgay1\images\1.jpg" />

      <HeadingSection>🚨 PLOT TWIST QUÁ CHÁY, ĐỘI MŨ LIỀN TAY 🚨</HeadingSection>

      <BodyTextSection>
        Đọc sách là cách để thoả sức bay bổng cùng trí tưởng tượng, vậy nên vừa đọc vừa dự đoán những diễn biến tiếp theo hẳn là thói quen không của riêng ai.
        Nhưng sách cũng như cuộc đời, mà đường đời thì đâu bao giờ bằng phẳng bạn nhỉ? Câu chuyện đang êm đềm tưởng chừng sắp có cái kết đẹp, rồi nhân vật mới
        xuất hiện, mạch cảm xúc mỗi nhân vật đều thay đổi làm bối cảnh tác phẩm đảo ngược, chắc chắn đến cả các dân “mọt” lâu năm cũng phải ngỡ ngàng vì những
        “khúc cua mượt” này!
      </BodyTextSection>

      <ImgSection src="\GocNhinMoi-articles\VuotVuMonCungNhaMotNgay1\images\2.jpg" />

      <HeadingSection>😶‍🌫️ TƯỞNG LÀ HẤP DẪN, NÀO NGỜ HỤT HẪNG 😶‍🌫️</HeadingSection>

      <BodyTextSection>
        Bạn đã bao giờ chọn mua một quyển sách được đánh giá cao, nhưng sau khi tự mình trải nghiệm thì tâm trí bạn bị lấp đầy bởi những hoài nghi liệu rằng vấn
        đề là ở mình hay ở quyển sách? Đừng lo, bạn không cô đơn đâu! Truyền thông giúp nhà “mọt” chúng mình dễ dàng tìm kiếm “người bạn” đúng gu, nhưng đôi khi
        những sản phẩm rất đỗi bình thường qua lăng kính phóng đại của truyền thông lại trở nên tuyệt hảo, từ đó dễ gây ra sự hụt hẫng cho độc giả. Vì vậy, nhớ
        chọn sách cẩn thận như chọn bạn mà chơi, bạn nhé!
      </BodyTextSection>

      <ImgSection src="\GocNhinMoi-articles\VuotVuMonCungNhaMotNgay1\images\3.jpg" />

      <HeadingSection>💖 ÁNH MẮT CHẠM NHÂN VẬT YÊU THÍCH, TIM LIỀN ĐẬP THÌNH THỊCH 💖</HeadingSection>

      <BodyTextSection>
        Hẳn ai trong chúng ta khi đọc sách cũng mong thấy được nhân vật có cùng hoàn cảnh, nội tâm với mình để đồng cảm, sẻ chia. Hoặc đôi khi ta chỉ đơn giản
        tìm kiếm một người bù đắp những khuyết điểm của mình để có hình mẫu mà ngưỡng mộ và noi theo. Thú thật đi, bạn đã bao giờ “lọt hố” một nhân vật hư cấu,
        rồi miệng bất giác mỉm cười, tim như đập loạn nhịp mỗi lần bóng dáng nhân vật ấy xuất hiện chưa nè?
      </BodyTextSection>

      <ImgSection src="\GocNhinMoi-articles\VuotVuMonCungNhaMotNgay1\images\4.jpg" />

      <HeadingSection>☔️ "MỐI RUỘT” BIẾN MẤT, “MỌT” NHƯ KHÓC NẤC ☔️</HeadingSection>

      <BodyTextSection>
        Nhưng đời không như là mơ, khi mà tác giả nắm trong tay “quyền sinh sát”. Thử tưởng tượng bạn đang dồn hết tâm huyết “cày” một bộ truyện, rồi nhân vật
        “ruột” đột ngột đăng xuất khỏi mạch truyện… Lúc ấy chắc hẳn thế giới như sụp đổ trước mắt, không hơn không kém! Bởi vậy mang danh là đọc sách cho khuây
        khoả, giải trí mà giải trí này nó lạ lắm, gặp mấy tác giả chẳng chiều lòng độc giả thì nhà “mọt” tụi mình cũng khổ tâm lắm chứ!
      </BodyTextSection>

      <ImgSection src="\GocNhinMoi-articles\VuotVuMonCungNhaMotNgay1\images\5.jpg" />

      <HeadingSection>✍🏻 THẤY QUOTE CHÍ LÝ, NOTE LẠI LIỀN ĐI ✍🏻</HeadingSection>

      <BodyTextSection>
        Dù cốt truyện có hợp gu hay không thì cũng không thể phủ nhận mỗi quyển sách đều cho chúng ta những “aha” moments.. Bạn còn nhớ bài đăng xinh xinh mà
        Papersane đã hướng dẫn bạn cách ghi chú khi đọc sách chứ? Đây là lúc để thực hành nè! Không chỉ dừng lại ở những câu nói làm tim bạn “rung rinh”, bạn
        cũng có thể highlight và note lại những chi tiết mà mình tâm đắc để sau này cần có thể dễ dàng tìm lại nè.
      </BodyTextSection>

      <ImgSection src="\GocNhinMoi-articles\VuotVuMonCungNhaMotNgay1\images\6.jpg" />

      <HeadingSection>⛅️ TÁC GIẢ SƠ HỞ LÀ KẾT MỞ, TÂM HỒN “MỌT” NGẨN NGƠ ⛅️</HeadingSection>

      <BodyTextSection>
        Có thể nói, một phần lý do các tác giả viết kết mở là để giúp dân “mọt” tụi mình phát huy tính sáng tạo, tự do nghĩ ra cái kết mình cho là hay nhất và
        khiến câu chuyện mãi vẫn còn để lại một nút thắt trong lòng độc giả, từ đó khiến cho độc giả ấn tượng mãi. Vậy nên thay vì tranh cãi xem kết truyện thế
        nào mới chính xác để rồi anh em trong gia đình nhà “mọt” chẳng còn hoà thuận với nhau, thì tại sao chúng mình không thử thả hồn theo cảm xúc để tự viết
        nên đoạn kết hợp tinh hợp lí của chính mình cho từng tác phẩm nhỉ?
      </BodyTextSection>

      <BodyTextSection>Thực hiện bởi Câu lạc bộ Sách Papersane Trường THPT chuyên Trần Đại Nghĩa</BodyTextSection>
    </>
  )
}

export default Article
