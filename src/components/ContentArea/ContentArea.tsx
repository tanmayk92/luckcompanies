import React from 'react'
import { useEmailTranslationContext } from 'EmailTranslationContext/EmailTranslationContext'
import { strToObj, strToArray } from 'utils'
import SkeletonLoader from 'components/SkeletonLoader/SkeletonLoader'

const ContentArea: React.FC = () => {
  const { targetLanguage, emailTranslation } = useEmailTranslationContext()
  //console.log('Email Translation: ', emailTranslation?.action)
  let negative, positive, neutral

  return (
    <>
      <div className="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Summary
        </h2>
        {emailTranslation !== undefined ? (
          <p className="mt-3 divide-y divider-gray-200 dark:divide-gray-700 dark:text-white border-t border-gray-200 pt-4">
            {emailTranslation?.summary}
          </p>
        ) : (
          <SkeletonLoader />
        )}
      </div>
      <div className="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Sentiments
        </h2>
        {emailTranslation !== undefined ? (
          <div className="mt-3 dark:divide-gray-700 dark:text-white border-t border-gray-200 pt-4">
            <div className="grid grid-cols-[120px_50px] gap-2">
              <p>
                Negative:{' '}
                {emailTranslation !== undefined &&
                  emailTranslation?.sentiment.negative}
                %
              </p>
              <span className="flex w-3 h-3 me-3 bg-red-500 rounded-full mt-1.5"></span>
            </div>
            <div className="grid dark:text-white grid-cols-[120px_50px] gap-2">
              <p>
                Neutral:{' '}
                {emailTranslation !== undefined &&
                  emailTranslation?.sentiment.neutral}
                %
              </p>
              <span className="flex w-3 h-3 me-3 bg-yellow-300 rounded-full mt-1.5"></span>
            </div>
            <div className="grid dark:text-white grid-cols-[120px_50px] gap-2">
              <p>
                Positive:{' '}
                {emailTranslation !== undefined &&
                  emailTranslation?.sentiment.positive}
                %
              </p>
              <span className="flex w-3 h-3 me-3 bg-green-500 rounded-full mt-1.5"></span>
            </div>
          </div>
        ) : (
          <SkeletonLoader />
        )}
      </div>
      <div className="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Actions
        </h2>
        {emailTranslation !== undefined ? (
          <div className="mt-3 dark:divide-gray-700 dark:text-white border-t border-gray-200 pt-4">
            <ul>
              {emailTranslation?.action.map((itr: any, idx: number) => {
                return <li className="list-disc mx-5">{itr}</li>
              })}
            </ul>
          </div>
        ) : (
          <SkeletonLoader />
        )}
      </div>
      <div className="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Translation
        </h2>
        {emailTranslation !== undefined ? (
          <p
            className="dark:text-white"
            dangerouslySetInnerHTML={{
              __html:
                emailTranslation !== undefined
                  ? emailTranslation.translation
                  : ''
            }}
          ></p>
        ) : (
          <SkeletonLoader />
        )}
      </div>
    </>
  )
}

export default ContentArea
