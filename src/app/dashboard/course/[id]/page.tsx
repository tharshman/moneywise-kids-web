import {
  getUserByEmail,
  getUserCourse,
  getQuestionsForCourse,
} from '@/app/lib/actions';
import YouTubePlayer from '@/app/ui/youtube-player';

export default async function Page({ params }: { params: { id: string } }) {
  const user = await getUserByEmail('vbortone@gmail.com');
  const userCourse = await getUserCourse(user.userId, params.id);
  const questions = await getQuestionsForCourse(params.id);

  return (
    <main className="ml-4">
      <section className="my-8">
        <h1 className="text-xl font-bold">{userCourse.name}</h1>
        <p className="font-semibold">{userCourse.description}</p>
      </section>
      <div className="divider"></div>
      <section className="mb-8">
        <h2 className="text-lg font-bold">Video</h2>
        <YouTubePlayer id={userCourse.video} title={userCourse.name} />
      </section>
      <div className="divider"></div>
      <section className="mb-8">
        <h2 className="mb-4 text-lg font-bold">Questions</h2>
        <form>
          {questions.map((question) => (
            <div key={question.questionId} className="mb-4">
              <p className="font-semibold">{question.question}</p>
              <div className="ml-4">
                {question.answers.map((answer) => (
                  <div key={answer.answerId} className="form-control flex">
                    <label htmlFor={answer.answerId}>
                      <input
                        className="mr-2"
                        type="radio"
                        id={answer.answerId}
                        name={question.questionId}
                        value={answer.answerId}
                      />
                      <span className="label-text">{answer.text}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <input type="button" value="Submit" className="btn btn-primary" />
        </form>
      </section>
    </main>
  );
}
