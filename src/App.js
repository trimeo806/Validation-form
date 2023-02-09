import React, { useState } from "react";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.elements.username.value);
    // const isUserNameValid = e.target.elements.username.value === formData.username.toLowerCase() ? true : false;
    // // console.log(isUserNameValid);
    //   if(!isUserNameValid) {setError("Username are not correct!")}
    //   else {setError(false)}
  }
  const [formData, setFormData] = useState({
    username: "thanhtri",
    email: "trimeo806",
    language: "",
    isGoing: false,
  })
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    // console.log(e.target.checked);
    let valueOrCheck = e.target.value;
    e.target.name === "isGoing" ? valueOrCheck = e.target.checked : valueOrCheck = e.target.value
    setFormData({ ...formData, [e.target.name]: valueOrCheck })

    if (e.target.name === "username") {
      // console.log(formData.username, e.target.value);
      const isUserNameValid = e.target.value === e.target.value/*formData.username*/.toLowerCase() ? true : false;
      // console.log(isUserNameValid);
      // Tại sao chỗ trước toLowerCase() không lấy là formData? Vì nếu là formData thì khi submit thì formData mới cập nhật, còn đang gõ thì input value cập nhật liên tục.
      // Nên việc so sánh giá trị khi đang gõ và giá trị khi chưa submit (chưa update) thì nó hoàn toàn vô nghĩa. Dẫn tới Error chỉ xhien khi sai 1 lần mà không tắt đi khi
      // người dùng đã gõ đúng
      if (!isUserNameValid) { setError("Username are not correct!") }
      else { setError(false) }
    }

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>{error}</p>
        <div>
          <label htmlFor="username">username</label>
          <input id="username" name="username" type="text" value={formData.username} onChange={handleInputChange}></input>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="text" value={formData.email} onChange={handleInputChange}></input>
        </div>

        <div>
          <label htmlFor="language">Language</label>
          <select name="language" value={formData.language} onChange={handleInputChange}>
            <option value="VN">VN</option>
            <option value="EN">EN</option>
            <option value="GE">GE</option>
          </select>
        </div>

        <div>
          <label htmlFor="isGoing">
            <input type="checkbox" id="isGoing" name="isGoing" checked={formData.isGoing} onChange={handleInputChange}></input> isGoing
          </label>
        </div>
        {/* với input dạng checkbox thì thay vì dùng value ta dùng checked = "" */}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
