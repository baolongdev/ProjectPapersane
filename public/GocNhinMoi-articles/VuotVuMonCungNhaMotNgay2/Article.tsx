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
      <HeadingSection>🚨 PIN YẾU! TÂM TRẠNG MỌT LIÊU XIÊU 🚨</HeadingSection>

      <BodyTextSection>
        😔 Dù thuộc tuýp người đầy nhiệt huyết đi chăng nữa, vẫn có lúc phần trăm pin trong chúng ta cạn kiệt dần. Những vị khách không mời như: chán nản, hoang
        mang, mất phương hướng cứ ập tới rút đi năng lượng của chúng ta. Nhất là mùa thi học kỳ đầy căng thẳng đang đến gần, khối lượng bài tập và đề cương
        chồng chất càng khiến những “vị khách” kia càng có cơ hội lấn át. 🔋 Những lúc này, mỗi người sẽ có cách “sạc đầy pin” khác nhau. Có thể là tận hưởng sở
        thích, hay đơn giản là nhấn tạm dừng một chút cho phép bản thân nghỉ ngơi giữa cuộc sống vội vã. Chậm lại không có nghĩa là tụt lại phía sau mà chậm lại
        là để ta sắp xếp lại mọi thứ và nhìn nhận lại bản thân mình. Vậy các Mọt sẽ chậm lại như thế nào nhỉ, Papersane sẽ tiết lộ ngay dưới đây nhé!
      </BodyTextSection>

      <ImgSection src="\GocNhinMoi-articles\VuotVuMonCungNhaMotNgay2\images\1.jpg" />

      <HeadingSection>📚 BÃO HAUL SÁCH NGÀY MƯA LÀM "MỌT" SAY SƯA 📚</HeadingSection>

      <BodyTextSection>
        Một trong những việc giảm stress cực mạnh đối với dân Mọt chúng mình chính là ngâm cứu, ngắm nghía thật lâu và lựa một (hoặc một vài) quyển sách ưng ý
        nhất để mang về làm chiến lợi phẩm. Những cuốn sách mới toanh với mùi hương dễ chịu sẽ làm trái tim của các Mọt hào hứng lại ngay trong tức khắc (còn
        khi nào đọc thì Mọt không biết).
      </BodyTextSection>

      <ImgSection src="\GocNhinMoi-articles\VuotVuMonCungNhaMotNgay2\images\2.jpg" />

      <HeadingSection>😴 NGHỈ MỘT LÚC, CHƠI MỘT CHÚT 😴</HeadingSection>

      <BodyTextSection>
        Một công việc rất quan trọng mà lúc tập trung trong guồng quay bận rộn có thể bạn không để ý tới, đó là… nghỉ ngơi. Có người đã nói “Cơ thể khỏe mạnh,
        tâm trí lành mạnh”, vì thế các bạn Mọt cũng không quên nghỉ ngơi để mau chóng lấy lại sức khỏe và tâm trạng phấn chấn để bắt tay vào những mục tiêu, dự
        định sắp tới.
      </BodyTextSection>

      <ImgSection src="\GocNhinMoi-articles\VuotVuMonCungNhaMotNgay2\images\3.jpg" />

      <HeadingSection>💪 NGÀY KHÔNG CÓ NẮNG, CÙNG NHAU CỐ GẮNG 💪</HeadingSection>

      <BodyTextSection>
        Không ai có thể ôm đồm mọi thứ mãi mà không cần một người tri âm để giãi bày tâm sự được. Vì vậy khi rơi vào tình trạng này ngoài người bạn là sách ra
        Mọt cũng tìm đến “đồng minh” của mình. Người đồng minh ấy đáng tin cậy, luôn quan tâm, mang đến nhiều năng lượng tích cực đôi khi còn cho ta những lời
        khuyên hữu ích từ góc nhìn của họ mà ta không thấy được nữa. Đôi khi chỉ vài điều nhỏ nhặt, lời động viên và cử chỉ ấm áp lại làm cho tâm trạng của
        chúng mình khá hơn rất nhiều đúng không nè?
      </BodyTextSection>

      <ImgSection src="\GocNhinMoi-articles\VuotVuMonCungNhaMotNgay2\images\4.jpg" />

      <HeadingSection>📖 ĐỌC SÁCH SAY MÊ, ĐỘNG LỰC TRÀN TRỀ 📖</HeadingSection>

      <BodyTextSection>
        Đã là Mọt, ít ai bỏ qua việc đọc sách khi mất động lực lắm đúng không nào? Mỗi lần đắm chìm vào những trang sách, Mọt được trải nghiệm cuộc đời đầy thú
        vị của những nhân vật truyền cảm hứng trong sách và tạm quên đi những lo âu trì trệ để đắm chìm vào cuộc phiêu lưu với những con chữ. Chắc chắn sau
        “cuộc thám hiểm” Mọt đã học được rất nhiều điều cũng như lấy lại nguồn cảm hứng làm việc từ những con người mình đã “gặp gỡ” trong chuyến thám hiểm ấy
        đó!
      </BodyTextSection>

      <BodyTextSection>Thực hiện bởi Câu lạc bộ Sách Papersane Trường THPT chuyên Trần Đại Nghĩa</BodyTextSection>
    </>
  )
}

export default Article
