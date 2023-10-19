import { baseApi } from "@/Redux/api/baseApi";
import { tagTypes } from "@/Redux/tag-types";
const FAQ_API = "/faqs";

const faqApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFaq: builder.query({
      query: () => ({
        url: `${FAQ_API}`,
        method: "GET",
      }),
      providesTags: [tagTypes.faq],
    }),

    createFaq: builder.mutation({
      query: (data) => ({
        url: `/faqs/create-faq`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.faq],
    }),
    updateFaq: builder.mutation({
      query: ({ id, data }) => ({
        url: `/faqs/update/${id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagTypes.faq],
    }),

    deleteFaq: builder.mutation({
      query: (id) => ({
        url: `/faqs/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.faq],
    }),
  }),
});

export const {
  useGetFaqQuery,
  useCreateFaqMutation,
  useUpdateFaqMutation,
  useDeleteFaqMutation,
} = faqApi;
