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
      <BodyTextSection>
        Sau thời gian dài chống dịch bệnh COVID-19 thì ắt hẳn nhiều bạn đã dần e ngại ra ngoài đường và đánh mất thói quen ra nhà sách đúng không nhỉ? Papersane
        cũng như bạn, ở nhà mà thèm được ngắm nghía những kệ sách đồ sộ và mân mê từng quyển sách mới. Tuy nhiên, thua keo này thì ta bày keo khác. Hãy cùng
        Papersane tìm hiểu về một nguồn “lương thực” cứu đói cho các “mọt” mang tên sách điện tử, với nhiều ưu điểm không kém cạnh gì so với sách giấy truyền
        thống đâu nhé!
      </BodyTextSection>

      <ImgSection src="\GocNhinMoi-articles\HuongDanGamNhamSachDienTuChoCacMot\images\2.jpg"/>

      <HeadingSection>
        🤔 Vậy sách điện tử là gì?
      </HeadingSection>

      <BodyTextSection>
        - Sách điện tử là phiên bản kỹ thuật số của các quyển sách được xuất bản để có thể đọc được qua các thiết bị điện tử như điện thoại, máy tính bảng, máy
        vi tính, thiết bị đọc sách chuyên dụng,...
      </BodyTextSection>

      <ImgSection src="\GocNhinMoi-articles\HuongDanGamNhamSachDienTuChoCacMot\images\3.jpg"/>

      <HeadingSection>
        🤔 Sách điện tử mang lại những lợi ích gì?
      </HeadingSection>

      <BodyTextSection>
        - Bạn có thể đọc sách điện tử trên nhiều loại thiết bị, giúp bạn có thể tự do lựa chọn “khổ sách” nếu như bạn có nhiều chiếc máy.
        <br />
        - Sách có dung lượng khá nhỏ, 1GB dung lượng có thể chứa được xấp xỉ 1000 sách điện tử, giúp các mọt đọc sách thả ga luôn nè!
        <br />
        - Thực hiện giao dịch trực tuyến (quá phù hợp cho những tình huống như vầy đúng không nè?), một vài đầu sách được phát hành miễn phí, giúp các bạn tận
        hưởng sách mà không cần tốn quá nhiều tiền.
        <br />- Không lo bị hư sách, bị “quái mọt” ăn, bị ố vàng,... vì sách nằm trong thiết bị điện tử hết rồi 😜
      </BodyTextSection>

      <ImgSection src="\GocNhinMoi-articles\HuongDanGamNhamSachDienTuChoCacMot\images\4.jpg"/>

      <HeadingSection>
        🤔 Vậy đọc sách điện tử ở đâu cho chất lượng thế?
      </HeadingSection>

      <BodyTextSection>
        - Apple Books: được tích hợp sẵn trên các thiết bị di động của Apple, có thể lưu trữ sách đã sở hữu trên iCloud. Đồng thời có khả năng highlight, thay
        đổi màu nền và phông chữ,... để phù hợp cho nhu cầu người sử dụng.
        <br />
        - Google Play Books: Apple Books nhưng dành cho Android.
        <br />
        - Amazon Kindle: Thư viện sách siêu to khổng lồ với nhiều chủ đề đa dạng cho các bạn tự do lựa chọn. Có nhiều tính năng siêu hữu dụng (tuy nhiên phải
        trả tiền để sử dụng).
        <br />
        - Waka: Thư viện đa dạng, có cả truyện tranh, các sách đều đã được dịch sang tiếng Việt.
        <br />
        - OverDrive: Đọc/mượn sách từ các thư viện ở Mỹ miễn phí.
        <br />
        - Project Gutenberg: Trang web miễn phí với nhiều đầu sách cũ bằng tiếng Anh (phù hợp cho các bạn đang trau dồi vốn tiếng Anh).
        <br />
        🔥Đặc biệt nhất chính là thư viện số thông minh của Trần Chuyên chúng ta với gần 11 nghìn đầu sách điện tử, bao gồm nhiều tác phẩm văn học trong nước và
        quốc tế cùng với nhiều đầu sách tham khảo cho những “mọt” chăm học nữa đó!
      </BodyTextSection>

      <ImgSection src="\GocNhinMoi-articles\HuongDanGamNhamSachDienTuChoCacMot\images\5.jpg"/>

      <HeadingSection>
        🤔 Cần lưu ý điều gì khi đọc sách điện tử?
      </HeadingSection>

      <BodyTextSection>
        - Nên đọc ở môi trường có ánh sáng đầy đủ, đặt thiết bị ở khoảng cách phù hợp, đọc với một thời gian nhất định, tránh bị cận nặng thêm để rồi phải thay
        kính mới nhé bạn ơi 😭
        <br />- Ưu tiên đọc sách ở các nguồn uy tín, tránh vì ham rẻ mà tải sách ở các trang web không an toàn, từ đó không chỉ tiền mất mà còn tật mang.
      </BodyTextSection>

      <BodyTextSection>
        Và thế là chúng ta vừa biết được thêm một nguồn lương thực để “cứu đói” khẩn cấp cho các mọt trong mùa dịch này. Hi vọng các bạn có thể duy trì thói
        quen đọc sách của mình, tận hưởng một mùa Tết Nhâm Dần thật vui nhưng vẫn tuân thủ theo các chỉ thị và quy tắc 5K mà Chính phủ đề ra, giữ gìn sức khoẻ
        nhưng vẫn không ngừng học hỏi nhé!
      </BodyTextSection>

      <BodyTextSection>
        Thực hiện bởi Câu lạc bộ Sách Papersane Trường THPT chuyên Trần Đại Nghĩa
      </BodyTextSection>
    </>
  )
}

export default Article
