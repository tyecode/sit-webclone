import React from "react";

const AboutSlider = () => {
  const [checked, setChecked] = React.useState(true);
  const [tabs, setTab] = React.useState(1);

  return (
    <div className="about-slider">
      <div className="slide-tabs">
        <label>
          <input
            type="radio"
            name="tabs"
            defaultChecked={checked}
            onChange={() => setChecked(!checked)}
            onClick={() => setTab(1)}
          />
          <span className="checkmark"></span>
        </label>
        <label>
          <input
            type="radio"
            name="tabs"
            onChange={() => setChecked(!checked)}
            onClick={() => setTab(2)}
          />
          <span className="checkmark"></span>
        </label>
        <label>
          <input
            type="radio"
            name="tabs"
            onChange={() => setChecked(!checked)}
            onClick={() => setTab(3)}
          />
          <span className="checkmark"></span>
        </label>
      </div>
      <div className="slider">
        <section className={tabs === 1 ? "slides" : "slide hidden"}>
          <h1 className="display-2">ວິໄສທັດ</h1>
          <div className="display-4">
            ວິໄສທັດຂອງສະຖາບັນ ເຕັກໂນໂລຊີ ສຸດສະກະ
            ມຸ້ງຫວັງທີ່ຈະເປັນສະຖາບັນການສຶກສາ ຊັ້ນນຳແຫ່ງໜຶ່ງໃນ ສປປ ລາວ ທີ່ມີມາດຕະ
            ຖານທາງວິຊາການໃນລະດັບສາກົນ, ສະໜອງການສຶກສາ
            ການຄົ້ນຄວ້າແລະການຝຶກອົບຮົມທີ່ມີຄຸນນະພາບໃຫ້ແກ່ສັງຄົມແລະ
            ສ້າງສາຍພົວພັນການຮ່ວມມືທາງວິຊາການແລະ
            ການແລກປ່ຽນນັກສຶກສາກັບສະຖາບັນການສຶກສາທັງພາຍໃນ ແລະ ສາກົນ.
          </div>
        </section>
        <section className={tabs === 2 ? "slides" : "slide hidden"}>
          <h1 className="display-2">ພາລະກິດ</h1>
          <div className="display-4">
            <ul>
              <li>
                ສະໜອງການສຶກສາທີ່ມີຄຸນນະພາບ ແລະ ທັນສະໄໝ ໃຫ້ແກ່ສັງຄົມ
                ໃນສາຂາວິຊາເທັກໂນໂລຍີຂໍ້ມູນຂ່າວສານ ,
                ສາຂາການບໍລິຫານທຸລະກິດ-ເສດຖະສາດ ແລະ ສາຂານິເທດສາດໃຫ້ໄດ້ມາດຕະຖານ
                ແລະ ຄຸນນະພາບ ເພື່ອຕອບສະໜອງການພັດທະນາເສດຖະກິດ-ສັງຄົມແຫ່ງຊາດ.
              </li>
              <li>
                ພັດທະນາ, ຄົ້ນຄ້ວາ ແລະ
                ຍົກລະດັບທາງດ້ານວິຊາການໃຫ້ທຽບເທົ່າລະດັບພາກພື້ນ ແລະ ສາກົນ
                ໂດຍການຮ່ວມມືກັບສະຖາບັນການສຶກສາ ແລະ ອົງການອື່ນໆທັງພາຍໃນ ແລະ
                ຕ່າງປະເທດ ເພື່ອປັບປຸງລະບົບການສິດສອນ ແລະ
                ສ້າງໂອກາດທາງດ້ານການສຶກສາໃຫ້ຄົນລາວ.
              </li>
            </ul>
          </div>
        </section>
        <section className={tabs === 3 ? "slides" : "slide hidden"}>
          <h1 className="display-2">ພັນທະກິດ</h1>
          <div className="display-4">
            ພັນທະກິດຂອງ ສະຖາບັນ ເຕັກໂນໂລຊີ ສຸດສະກະ ມີດັ່ງລຸ່ມນີ້:
            <ul>
              <li>
                ພັດທະນາຫຼັກສູດແລະວິທີການຮຽນການສອນໃຫ້ມີຄວາມຫຼາກຫຼາຍ, ທັນສະໄໝ,
                ມີລັກສະນະສາກົນ, ສາມາດຕອບສະໜອງຄວາມຕ້ອງການຂອງສັງຄົມໄດ້
                ໂດຍເນັ້ນພາກປະຕິບັດຕົວຈິງແລະເອົານັກສຶກສາເປັນຈຸດໃຈກາງ.
              </li>
              <li>
                ຕັ້ງໜ້າຄົ້ນຄວ້າທາງດ້ານວິທະຍາສາດ
                ໂດຍສົ່ງເສີິມແລະພັດທະນາໃຫ້ຄູ-ອາຈານແລະນັກສຶກສາດຳເນີນການຄົ້ນຄວ້າວິໄຈແລະບໍລິການທາງດ້ານວິຊາການແກ້ສັງຄົມ
                ພ້ອມທັເຜີຍແພ່ຜົນງານຄົ້ນຄວ້າໃຫ້ສັງຄົມຮັບຮູ້ພ້ອມທັງສ້າງການເຊື່ອມໂຍງແລະເປັນແຫຼ່ງຄວາມຮູ້
                ໃຫ້ແກ່ຊຸມຊົນອ້ອມຂ້າງກໍ່ຄືສັງຄົມໂດຍລວມ ແລະ ທຸລະກິດຂະແໜງຕ່າງໆ.
              </li>
              <li>
                ສ້າງນັກສຶກສາໃຫ້ເປັນຜູ້ມີຄວາມຮູ້ຄູ່ຄວາມດີ, ມີຄຸນນະທຳ, ຈັນຍາທຳ,
                ຮັກການຮຽນຮູ້ແລະຮັກສາໄວ້ຊຶ່ງວັດທະນະທຳແຫ່ງຊາດ,
                ພ້ອມທັງສອດແຊກຄຸນນະທໍາ, ຈາລິຍະທໍາ, ແລະວັດທະນະທໍາລາວໄປຄຽງຄູ່ກັນ.
              </li>
              <li>
                ສ້າງນັກສຶກສາໃຫ້ຮູ້ຈັກຄວາມສຳຄັນຂອງສິ່ງແວດລ້ອມ, ຮູ້ຮັກສາ ແລະ
                ອະນຸລັກສິ່ງແວດລ້ອມ.
              </li>
              <li>
                ສ້າງແລະຂະຫຍາຍການຮ່ວມມືກັບອົງການສາກົນແລະສະຖາບັນການສຶກສາຕ່າງໆທັງພາຍໃນແລະຕ່າງປະເທດ.
              </li>
              <li>
                ພັດທະນາຕົນເອງເປັນສະຖາບັນການສຶກສາທີ່ມີຜົນງານທາງວິຊາການທີ່ມີຄຸນນະພາບລະດັບສູງເປັນທີ່ຍອມຮັບຂອງສັງຄົມຢ່າງກ້ວາງຂວາງທັງພາຍໃນປະເທດແລະສາກົນ.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutSlider;