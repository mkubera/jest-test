type Post = {
  id: number;
  text: string;
  createdAt: number;
  isAdmin?: boolean;
};

const newPost = ({ id, text, createdAt, isAdmin = false }: Post): Post => ({
  id,
  text,
  createdAt,
  isAdmin,
});

describe("newPost", () => {
  it("creates a new post with the correct properties", () => {
    const id = 1;
    const text = "Hello, world!";
    const createdAt = Date.now();

    const postData = { id, text, createdAt };

    const post1 = { ...postData, isAdmin: false };
    const post2 = newPost(postData);

    expect(post1).toEqual(post2);
  });
});
