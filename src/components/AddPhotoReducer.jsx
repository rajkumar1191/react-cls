import { useReducer } from "react";

const initialState = {
  form: { albumId: 1, title: "", url: "", showData: true, price: 0 },
  errors: {
    albumId: "",
    title: "",
    url: "",
    price: "",
  },
};

const validateField = (name, value) => {
  if (name === "price" && (isNaN(value) || Number(value) <= 0)) {
    return "Price must be a non-negative number";
  }

  if (name === "url" && !value.startsWith("http")) {
    return "URL must start with http or https";
  }

  if ((name === "albumId" || name === "title") && value.trim() === "") {
    return `${name} cannot be empty`;
  }
  return "";
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      const { field, value } = action;
      const errorMsg = validateField(field, value);
      return {
        ...state,
        form: {
          ...state.form,
          [field]: value,
        },
        errors: {
          ...state.errors,
          [field]: errorMsg,
        },
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
};

const AddPhotoReducer = (props) => {
  const { passPhotoData } = props;
  const [formData, dispatch] = useReducer(formReducer, initialState);
  const { form, errors } = formData;

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const hasErrors = Object.values(errors).some((error) => error !== "");
    if (hasErrors) {
      alert("Please fix the errors in the form before submitting.");
      return;
    }

    const formattedFormData = {
      albumId: Number(form.albumId),
      title: form.title,
      url: form.url,
      showData: form.showData === "true" || form.showData === true,
      price: Number(form.price),
      thumbnailUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png",
    };

    passPhotoData(formattedFormData);

    // Optional: reset form
    dispatch({ type: "RESET" });
  };

  return (
    <div>
      <h3>Add Photo Component (useReducer)</h3>
      <form onSubmit={handleSubmit}>
        <label>Album Id</label>
        <input
          type="text"
          name="albumId"
          value={form.albumId}
          onChange={handleChange}
        />
        {errors.albumId && (
          <span style={{ color: "red" }}>{errors.albumId}</span>
        )}
        <br />

        <label>Title</label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
        />
        {errors.title && <span style={{ color: "red" }}>{errors.title}</span>}
        <br />

        <label>URL</label>
        <input
          type="text"
          name="url"
          value={form.url}
          onChange={handleChange}
        />
        {errors.url && <span style={{ color: "red" }}>{errors.url}</span>}
        <br />

        <label>Show Data</label>
        <input
          type="text"
          name="showData"
          value={form.showData}
          onChange={handleChange}
        />

        <br />

        <label>Price</label>
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
        />
        {errors.price && <span style={{ color: "red" }}>{errors.price}</span>}
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddPhotoReducer;


/*

app -> name -> main -> child-> grandchild -> great grandchild -> property drilling -> context api/redux


*/