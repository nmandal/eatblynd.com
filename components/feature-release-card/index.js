export default function FeatureReleaseCard({ item, onRemove, admin }) {
  const { score, title } = item

  const remove = () => {
    if (confirm('Restaurant will be removed. Are you sure?')) {
      onRemove(item)
    }
  }

  return (
    <article className="flex items-center space-x-4">
      <div
        className="
        flex flex-col items-center bg-gray-200 py-1 w-10 rounded"
      >
        <span className="font-bold text-sm">{score}</span>
      </div>
      <h5>{title}</h5>
      {process.env.NEXT_PUBLIC_AUTH0_ADMIN_ID === admin && (
            <>
              <span>•</span>
              <button
                type="button"
                onClick={remove}
                className="hover:text-gray-800 hover:underline"
              >
                Remove
              </button>
            </>
      )}
    </article>
  )
}
