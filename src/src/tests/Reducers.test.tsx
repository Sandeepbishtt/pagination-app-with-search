import Store from "../Redux/Store";
import { addData } from "../Redux/PostSlice";

test("Should set the data ", () => {
  Store.dispatch(
    addData({
      hits: [
        {
          author: "quantisan",
          comment_text: null,
          created_at: "2021-11-16T04:34:18.000Z",
          created_at_i: 1637037258,
          num_comments: 0,
          objectID: "29236892",
          parent_id: null,
          points: 1,
          story_id: null,
          story_text: null,
          story_title: null,
          story_url: null,
          title: "Find licenses for your project's dependencies",
          url: "https://github.com/pivotal/LicenseFinder",
        },
      ],
    })
  );

  let state = Store.getState().data;
  const question = state.data.find((val) => val.created_at_i === 1637037258);
  expect(question?.author).toBe("quantisan");
  expect(question?.title).toBe("Find licenses for your project's dependencies");
  expect(question?.url).toBe("https://github.com/pivotal/LicenseFinder");
});
