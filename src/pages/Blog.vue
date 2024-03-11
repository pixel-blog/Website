<script>
import BlogArticle from "@/components/BlogArticle.vue";
import BlogComments from "@/components/BlogComments.vue";
import RecentPosts from "@/components/RecentPosts.vue";

export default {
  name: "Blog",
  mounted() {
    console.log(this.$route.params.id);
  },
  data() {
    return {
      comments: [
        {
          user: {
            avatarURL: "https://picsum.photos/256",
            username: "someuser"
          },
          message: "Lorem ipsum dolor sit amet consectetur."
        },
        {
          user: {
            avatarURL: "https://picsum.photos/256",
            username: "someuser"
          },
          message: "Lorem ipsum dolor sit amet consectetur."
        },
        {
          user: {
            avatarURL: "https://picsum.photos/256",
            username: "someuser"
          },
          message: "Lorem ipsum dolor sit amet consectetur."
        }
      ],
      user: {
        avatarURL: "https://picsum.photos/256",
        username: "someuser"
      }
    };
  },
  components: {RecentPosts, BlogComments, BlogArticle}
}
</script>

<template>
<div class="blog-main">
  <div class="blog-content">
    <div class="blog-article">
      <BlogArticle
          title="Lorem ipsum dolor sit amet"
          thumb-src="https://picsum.photos/900/320"
          :posted-at="new Date()"
          :author="{avatarURL: 'https://picsum.photos/256', name: 'Author name'}"
      >
        Lorem ipsum dolor sit amet consectetur. Sit accumsan vestibulum turpis pretium diam cursus. Sed et eu iaculis quis habitant. Amet cursus morbi enim cursus eget. Ultricies scelerisque dictumst ullamcorper eget quis euismod. Id mauris sed ullamcorper fames gravida. Laoreet nibh rhoncus nibh posuere ornare tincidunt. Ultricies faucibus tempus sed neque tempor. Imperdiet neque et mattis bibendum arcu sem nulla eu interdum. Massa pulvinar etiam mattis quam bibendum imperdiet vestibulum. Feugiat est posuere senectus aliquet nisl nam turpis. Amet purus congue condimentum commodo convallis neque. Habitasse est dolor donec eu tristique est ut volutpat commodo. Enim tellus sodales quis at. Dui pellentesque diam molestie quisque curabitur.
        <br/><br/>
        Eget purus aliquam viverra odio et. Hendrerit fames senectus elit consectetur ullamcorper vel dignissim malesuada ultrices. Tortor eu arcu vulputate sed. Dictum ipsum eu feugiat montes suspendisse massa eget. Varius gravida placerat sed non ipsum consectetur. In sapien et faucibus viverra quam morbi. Placerat eget gravida nulla pellentesque. Auctor fermentum nisl ac aliquam dignissim gravida turpis odio. Cras cras nulla risus in lacinia egestas in. Commodo donec dolor viverra nulla aliquam nisi nulla porttitor.
        <br/><br/>
        Nunc mollis mattis elementum habitasse risus aliquet sem. Sem pellentesque mi ultricies nulla quis luctus. Sed vel elit porta arcu. Odio hac sed lacinia morbi dui est. Congue volutpat amet tincidunt at fermentum. Lorem faucibus praesent magnis in malesuada suscipit accumsan tincidunt. Volutpat imperdiet quis in in nisl egestas ornare viverra massa.
        <br/><br/>
        Diam adipiscing tristique eu lectus id ut. Sit sed massa lectus orci pulvinar venenatis tempor quam posuere. Justo tortor vestibulum posuere nascetur quis ante fames. Venenatis mattis libero felis auctor elit eget auctor. Dolor nulla ornare tellus mauris a mauris sit nibh. Vulputate tempor non libero viverra viverra vitae fermentum commodo. Tristique arcu viverra at phasellus etiam a. Nam aliquet non elementum iaculis. Ut amet nibh lorem nullam vitae adipiscing habitant. Ullamcorper hendrerit velit eu nunc blandit. Molestie cursus lectus id convallis ut. Urna sit egestas morbi venenatis volutpat non amet. Eget nullam diam cras magna dictumst eget. Egestas sit vivamus dapibus in. Arcu nisi feugiat cursus ipsum in amet.
        <br/><br/>
        Gravida scelerisque sed ultrices amet urna consectetur vitae congue lorem. Netus pharetra mattis velit sit nec viverra nulla diam consequat. Elementum dolor tincidunt in sed adipiscing. Faucibus sem vitae mauris sed. At ut aliquam ipsum ac. Risus non dolor vulputate donec pulvinar elit tristique mattis. Laoreet imperdiet consequat ut fames. Turpis senectus platea vel volutpat. Risus faucibus natoque tellus elit sit tortor ac rutrum.
      </BlogArticle>
    </div>
    <div class="blog-comments">
      <BlogComments :comments="comments" :user="user" />
    </div>
  </div>
  <div class="recent-posts">
    <RecentPosts />
  </div>
</div>
</template>

<style scoped>
.blog-main {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2.5rem;
}

.blog-content {
  grid-column: span 2;
}

.blog-article {
  margin-bottom: 2rem;
}
</style>