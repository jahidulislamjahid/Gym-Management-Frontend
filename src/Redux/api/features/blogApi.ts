import { baseApi } from "@/Redux/api/baseApi";
import { tagTypes } from "@/Redux/tag-types";
const BLOG_API = "/blogs";

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => ({
        url: `${BLOG_API}`,
        method: "GET",
      }),
      providesTags: [tagTypes.blog],
    }),

    createBlog: builder.mutation({
      query: (data) => ({
        url: `${BLOG_API}/create-blog`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.blog],
    }),
    updateBlog: builder.mutation({
      query: ({ id, data }) => ({
        url: `${BLOG_API}/${id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagTypes.blog],
    }),

    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/${BLOG_API}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.blog],
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogApi;
