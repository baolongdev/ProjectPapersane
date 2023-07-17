import { Typography } from "@mui/material"
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
        Đã bao giờ các bạn nhìn thấy một thông tin thú vị, một câu nói cực “chất” của nhân vật nào đó khiến bạn muốn “save as” vào đầu ngay nhưng lại quên
        “sạch” sau khi đọc xong quyển sách chưa? Hay có khi nào bạn muốn trích dẫn điều gì đó từ sách nhưng không thể nhớ được đầy đủ nội dung cần thiết cũng
        như không biết nên tìm lại ở đâu không? Nếu đúng là vậy thì Papersane chúng mình sẽ “ra tay” với một vài mẹo hay trong bài viết này để các bạn có thể
        ghi chú một cách hiệu quả hơn. Chúng ta hãy bắt đầu thôi nào!
      </BodyTextSection>

      <ImgSection src="\GocNhinMoi-articles\CachGhiChuKhiDocSach\images\2.jpg" />

      <HeadingSection>1. “Chắc cú” nội dung ghi chú💪</HeadingSection>

      <BodyTextSection>
        Việc đầu tiên cần làm để ghi chú hiệu quả chính là xác định những nội dung cần nhớ. Vì vậy, khi đọc sách, bạn hãy lưu tâm đến những thông tin mà bản
        thân cảm thấy thú vị, những kiến thức mình nghĩ là cần thiết cho sau này, hay lối hành văn độc đáo, những câu nói “để đời” khiến bạn ấn tượng để ghi chú
        lại nha.
      </BodyTextSection>

      <ImgSection src="\GocNhinMoi-articles\CachGhiChuKhiDocSach\images\3.jpg" />

      <HeadingSection>2. Màu sắc bắt mắt, ăn chắc con 10🏅</HeadingSection>

      <BodyTextSection>
        Sau khi đã nắm bắt được những thông tin quan trọng, các bạn hãy dùng bút highlight hoặc các loại bút khác với những màu sắc bắt mắt để tô lên, gạch chân
        hoặc đánh dấu ở đầu và cuối đoạn mình đã “nghía” sao cho phù hợp tùy theo độ dài của đoạn đó. Chính việc đó sẽ giúp ta dễ phân loại nội dung hơn. Như
        vậy, khi muốn tìm kiếm chính xác một thông tin đã đọc được trong sách, ta có thể lật lại thật nhanh mà vẫn có được thông tin mình cần một cách dễ dàng
        rồi nè.
      </BodyTextSection>

      <ImgSection src="\GocNhinMoi-articles\CachGhiChuKhiDocSach\images\4.jpg" />

      <HeadingSection>3. “Gói gọn” trong từng câu chữ🖋 </HeadingSection>

      <BodyTextSection>
        Sau khi hoàn thành xong hai bước trên thì hãy cùng bắt tay vào ghi lại nội dung bạn muốn thôi nào! Để ghi chú một cách hiệu quả, hãy đọc sơ lại một lượt
        phần đã đánh dấu, sau đó ghi lại tóm tắt bằng chính lời văn của mình. Chúng ta cũng có thể ghi chú bằng cách đặt ra những câu hỏi, sau đó ghi số trang ở
        bên cạnh để có thể lật lại khi cần. Mục đích của việc tóm tắt thật ngắn gọn nội dung theo ý của bản thân là để ghi nhớ và hệ thống hóa kiến thức một
        cách dễ dàng hơn đó.
      </BodyTextSection>

      <ImgSection src="\GocNhinMoi-articles\CachGhiChuKhiDocSach\images\5.jpg" />

      <HeadingSection>4. “Ghé thăm” ghi chú của mình thường xuyên📝</HeadingSection>

      <BodyTextSection>
        Việc ghi chú có ý nghĩa chỉ khi có thể nhớ được những gì đã ghi, vậy nên hãy xem lại những thông tin bản thân đã tóm tắt theo từng khoảng thời gian cách
        nhau của phương pháp Spaced repetition (Kỹ thuật lặp lại ngắt quãng). Ngoài ra, chia sẻ cho người khác về những điều thú vị trong sách cũng là một cách
        ghi nhớ rất hiệu quả.
      </BodyTextSection>

      <BodyTextSection>Thực hiện bởi Câu lạc bộ Sách Papersane Trường THPT chuyên Trần Đại Nghĩa</BodyTextSection>
    </>
  )
}

export default Article
