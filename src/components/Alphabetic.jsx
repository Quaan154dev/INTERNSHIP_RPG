import React, { useState } from "react";
import styles from "../assets/css/alphabet.module.css";
import { Modal, Button } from "antd";
import { useTheme } from "../ThemeContext";
const data = [
  {
    han: "ㅏ",
    viet: "[a]",
    image:
      "https://www.zila.com.vn/wp-content/uploads/2020/06/17-e1591974055666.png",
  },
  {
    han: "ㅑ",
    viet: "[ya]",
    image: "https://www.zila.com.vn/wp-content/uploads/2020/06/hangeul-ya.jpg",
  },
  {
    han: "ㅓ",
    viet: "[o]",
    image:
      "https://www.zila.com.vn/wp-content/uploads/2020/06/19-e1591974787377.png",
  },
  {
    han: "ㅕ",
    viet: "[yo]",
    image:
      "https://www.zila.com.vn/wp-content/uploads/2020/06/20-e1591974829201.png",
  },
  {
    han: "ㅗ",
    viet: "[ô]",
    image:
      "https://www.zila.com.vn/wp-content/uploads/2020/06/21-e1591974852377.png",
  },
  {
    han: "ㅛ",
    viet: "[yô]",
    image:
      "https://www.zila.com.vn/wp-content/uploads/2020/06/22-e1591974885256.png",
  },
  {
    han: "ㅜ",
    viet: "[u]",
    image:
      "https://www.zila.com.vn/wp-content/uploads/2020/06/23-e1591974920319.png",
  },
  {
    han: "ㅠ",
    viet: "[yu]",
    image:
      "https://www.zila.com.vn/wp-content/uploads/2020/06/24-e1591975006593.png",
  },
  {
    han: "ㅡ",
    viet: "[ư]",
    image:
      "https://www.zila.com.vn/wp-content/uploads/2020/06/25-e1591975035551.png",
  },
  {
    han: "ㅣ",
    viet: "[i]",
    image:
      "https://www.zila.com.vn/wp-content/uploads/2020/06/26-e1591975081978.png",
  },
  {
    han: "ㅐ",
    viet: "[e]",
    image:
      "https://www.zila.com.vn/wp-content/uploads/2020/06/27-e1591975115336.png",
  },
  {
    han: "ㅒ",
    viet: "[ye]",
    image:
      "https://www.zila.com.vn/wp-content/uploads/2020/06/28-e1591975144539.png",
  },
  {
    han: "ㅔ",
    viet: "[ê]",
    image:
      "https://www.zila.com.vn/wp-content/uploads/2020/06/29-e1591975176136.png",
  },
  {
    han: "ㅖ",
    viet: "[yê]",
    image:
      "https://www.zila.com.vn/wp-content/uploads/2020/06/30-e1591975232679.png",
  },
  {
    han: "ㅘ",
    viet: "[wa]",
    image:
      "https://www.zila.com.vn/wp-content/uploads/2020/06/31-e1591976296510.png",
  },
  {
    han: "ㅙ",
    viet: "[we]",
    image:
      "https://www.zila.com.vn/wp-content/uploads/2020/06/32-e1591976337860.png",
  },
  {
    han: "ㅚ",
    viet: "[uê]",
    image:
      "https://www.zila.com.vn/wp-content/uploads/2020/06/33-e1591976390764.png",
  },
  {
    han: "ㅝ",
    viet: "[wo]",
    image:
      "https://www.zila.com.vn/wp-content/uploads/2020/06/34-1-e1591976421408.png",
  },
  {
    han: "ㅞ",
    viet: "[wê]",
    image:
      "https://www.zila.com.vn/wp-content/uploads/2020/06/35-e1591976448751.png",
  },
  {
    han: "ㅟ",
    viet: "[wi]",
    image:
      "https://www.zila.com.vn/wp-content/uploads/2020/06/36-e1591976623721.png",
  },
  {
    han: "ㅢ",
    viet: "[ưi]",
    image:
      "https://www.zila.com.vn/wp-content/uploads/2020/06/37-e1591976650682.png",
  },
];
const data2 = [
  {
    han: "ㄱ",
    viet: "Phụ âm đầu: [k] / [g]\nPhụ âm cuối: [k]",
    image:
      "https://www.zila.com.vn/wp-content/uploads/2020/06/3-e1591971534722.png",
  },
  {
    han: "ㄴ",
    viet: "Phụ âm đầu: [n]\nPhụ âm cuối: [n]",
    image:
      "https://www.zila.com.vn/wp-content/uploads/2020/06/hangeul-1-e1591972497436.jpg",
  },
  {
    han: "ㄷ",
    viet: "Phụ âm đầu: [t] / [d]\nPhụ âm cuối: [t]",
    image:
      "https://www.zila.com.vn/wp-content/uploads/2020/06/5-e1591972614453.png",
  },
  {
    han: "ㄹ",
    viet: "Phụ âm đầu: [r] / [l]\nPhụ âm cuối: [l]",
    image:
      "https://www.zila.com.vn/wp-content/uploads/2020/06/6-e1591972656220.png",
  },
  {
    han: "ㅁ",
    viet: "Phụ âm đầu: [m]\nPhụ âm cuối: [m]",
    image:
      "https://www.zila.com.vn/wp-content/uploads/2020/06/7-e1591972731715.png",
  },
  {
    han: "ㅂ",
    viet: "Phụ âm đầu: [b]\nPhụ âm cuối: [p]",
    image:
      "https://www.zila.com.vn/wp-content/uploads/2020/06/8-e1591972952502.png",
  },
  {
    han: "ㅅ",
    viet: "Phụ âm đầu: [s]\nPhụ âm cuối: [t]",
    image:
      "https://www.zila.com.vn/wp-content/uploads/2020/06/9-e1591973017115.png",
  },
  {
    han: "ㅇ",
    viet: "Phụ âm đầu: âm câm\nPhụ âm cuối: [ng]",
    image:
      "https://www.zila.com.vn/wp-content/uploads/2020/06/10-e1591973052102.png",
  },
  {
    han: "ㅈ",
    viet: "Phụ âm đầu: [j]\nPhụ âm cuối: [t]",
    image:
      "https://www.zila.com.vn/wp-content/uploads/2020/06/Hangeul-j-e1591973370605.jpg",
  },
  {
    han: "ㅊ",
    viet: "Phụ âm đầu: [j’]\nPhụ âm cuối: [t]",
    image:
      "https://www.zila.com.vn/wp-content/uploads/2020/06/12-e1591973507275.png",
  },
  {
    han: "ㅋ",
    viet: "Phụ âm đầu: [k’]\nPhụ âm cuối: [k]",
    image:
      "https://www.zila.com.vn/wp-content/uploads/2020/06/13-e1591973532301.png",
  },
  {
    han: "ㅌ",
    viet: "Phụ âm đầu: [t’]\nPhụ âm cuối: [t]",
    image:
      "https://www.zila.com.vn/wp-content/uploads/2020/06/14-e1591973600830.png",
  },
  {
    han: "ㅍ",
    viet: "Phụ âm đầu: [p’]\nPhụ âm cuối: [p]",
    image: "https://www.zila.com.vn/wp-content/uploads/2020/06/hangeul-ph.jpg",
  },
  {
    han: "ㅎ",
    viet: "Phụ âm đầu: [h]\nPhụ âm cuối: [t]",
    image:
      "https://www.zila.com.vn/wp-content/uploads/2020/06/16-e1591973761904.png",
  },
];
const Alphabetic = () => {
  const { season } = useTheme();

  const [visible, setVisible] = useState(false);
  const [modalData, setModalData] = useState({});
  const showModal = (index, source) => {
    setModalData({
      ...source[index],
      index: index,
      source: source,
    });
    setVisible(true);
  };
  const nextModal = () => {
    const newModalData = {
      ...modalData.source[modalData.index + 1],
      index: modalData.index + 1,
      source: modalData.source,
    };
    setModalData(newModalData);
  };
  const prevModal = () => {
    setModalData({
      ...modalData.source[modalData.index - 1],
      index: modalData.index - 1,
      source: modalData.source,
    });
  };
  //   const handleOk = () => {
  //     setVisible(false);
  //   };
  //   const handleCancel = () => {
  //     setVisible(false);
  //   };
  const closeModal = () => {
    setVisible(false);
  };
  return (
    <div className={`${season}-gradient md mx-auto `}>
      <a href="/home">
        <div className="">
          <button className="rounded-sm border-solid border-2 border-sky-500">
            Back home
          </button>
        </div>
      </a>
      <div className="flex flex-row">
        <div className="basis-5/12">
          <h1 className={styles["text-header"]}>Nguyên Âm</h1>
          <div className="flex flex-row flex-wrap">
            {data.map((item, index, source) => {
              return (
                <Button
                  onClick={() => showModal(index, source)}
                  className={`${styles.alphabet} ${styles.left}`}
                  key={index}
                >
                  {item.han}
                </Button>
              );
            })}
          </div>
        </div>
        <div className="basis-7/12">
          <h1 className={styles["text-header"]}>Phụ Âm</h1>
          <div className="flex flex-row flex-wrap">
            {data2.map((item, index, source) => {
              return (
                <Button
                  key={index}
                  onClick={() => showModal(index, source)}
                  className={`${styles.alphabet} ${styles.right}`}
                >
                  {item.han}
                </Button>
              );
            })}
          </div>
          <h1 className={styles["text-header"]}>Phụ Âm Đặc Biệt</h1>
          <div className="flex flex-row flex-wrap">
            <div className={`${styles.alphabet} ${styles.right}`}>ㄲ</div>
            <div className={`${styles.alphabet} ${styles.right}`}>ㄸ</div>
            <div className={`${styles.alphabet} ${styles.right}`}>ㅃ</div>
            <div className={`${styles.alphabet} ${styles.right}`}>ㅆ</div>
            <div className={`${styles.alphabet} ${styles.right}`}>ㅉ</div>
          </div>
          <h1 className={styles["text-header"]}>Phụ Âm Kết Hợp</h1>
          <div className="flex flex-row flex-wrap">
            <div className={`${styles.alphabet} ${styles.right}`}>ㄳ</div>
            <div className={`${styles.alphabet} ${styles.right}`}>ㄵ</div>
            <div className={`${styles.alphabet} ${styles.right}`}>ㄶ</div>
            <div className={`${styles.alphabet} ${styles.right}`}>ㄺ</div>
            <div className={`${styles.alphabet} ${styles.right}`}>ㄻ</div>
            <div className={`${styles.alphabet} ${styles.right}`}>ㄼ</div>
            <div className={`${styles.alphabet} ${styles.right}`}>ㄽ</div>
            <div className={`${styles.alphabet} ${styles.right}`}>ㄾ</div>
            <div className={`${styles.alphabet} ${styles.right}`}>ㄿ</div>
            <div className={`${styles.alphabet} ${styles.right}`}>ㅀ</div>
            <div className={`${styles.alphabet} ${styles.right}`}>ㅄ</div>
          </div>
        </div>
      </div>
      <Modal open={visible} footer onClose={closeModal} onCancel={closeModal}>
        <div className="grid grid-flow-col grid-cols-14">
          {modalData?.index !== 0 ? (
            <button
              type="button"
              className="fa-solid fa-chevron-left my-auto cursor-pointer text-start max-w-2 p-2"
              onClick={() => prevModal()}
            ></button>
          ) : (
            <button
              type="button"
              className="fa-solid fa-chevron-left my-auto cursor-pointer text-start max-w-2 opacity-50 p-2"
              disabled={true}
            ></button>
          )}

          <div className="grid grid-flow-col col-span-12 gap-1">
            <div>
              <h1
                className="text-center text-9xl bg-black text-white p-4 rounded-lg opacity-80"
                style={{ width: "180px" }}
              >
                {modalData.han}
              </h1>
              <pre
                className="text-center pt-4 font-bold text-lg"
                style={{ width: "180px" }}
              >
                {modalData.viet}
              </pre>
            </div>
            <div>
              <img
                src={modalData.image}
                alt=""
                style={{ width: "auto", height: "160px", maxWidth: "200px" }}
                className="mx-auto"
              />
            </div>
          </div>
          {modalData.index !== modalData?.source?.length - 1 ? (
            <button
              className="fa-solid fa-chevron-right my-auto cursor-pointer text-end p-2"
              onClick={() => nextModal()}
            ></button>
          ) : (
            <button className="fa-solid fa-chevron-right my-auto cursor-pointer text-end opacity-50 p-2"></button>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Alphabetic;
