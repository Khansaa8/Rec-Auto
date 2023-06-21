import styles from "../style"
import MainLayout from "../Layout/MainLayout"
import {posts} from "../constants"


const Usecase = () => {
  return (
    <MainLayout>
      <main className={`${styles.padding} `}>
      <div className={`${styles.paddingX} flex-1 flex-col sm:px-36 px-6`}>
      <h1 className={`${styles.heading2} ${styles.flexCenter} text-gradient `}>Voice Messaging for Sales</h1>
      <p className={`${styles.flexCenter} ${styles.paragraph} text-[25px]`}>Building connections with a human touch.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between border-r border-cyan-200">
              <div className="group relative">
                <h3 className={`font-poppins font-medium xs:text-[30px] text-[24px] text-white xs:leading-[70.8px] leading-[66.8px] w-full`}>
                  
                    <span className="absolute inset-0" />
                    {post.title}
        
                </h3>
                <p className={`${styles.paragraph} line-clamp-3 `}>{post.description}</p>

              </div>

            </article>
          ))}
        </div>
      </main>
    </MainLayout>
  )
}

export default Usecase