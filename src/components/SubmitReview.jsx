import React from 'react'
import { User, Mail, Star, MessageSquare } from 'lucide-react'

const SubmitReview = () => {
  return (
    <div className="mt-12 bg-white rounded-lg border border-gray-200 p-6 sm:p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">SUBMIT REVIEW</h2>
      
      <form className="space-y-5">
        {/* Name Input */}
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            <User size={20} />
          </div>
          <input
            type="text"
            placeholder="Name"
            className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:bg-white transition-all text-base"
          />
        </div>

        {/* Email Input */}
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            <Mail size={20} />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:bg-white transition-all text-base"
          />
        </div>

        {/* Rating Select */}
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            <Star size={20} />
          </div>
          <select className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:bg-white transition-all text-base appearance-none cursor-pointer text-gray-500">
            <option>Select Rating</option>
            <option>⭐ 1 Star</option>
            <option>⭐⭐ 2 Stars</option>
            <option>⭐⭐⭐ 3 Stars</option>
            <option>⭐⭐⭐⭐ 4 Stars</option>
            <option>⭐⭐⭐⭐⭐ 5 Stars</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Comment Textarea */}
        <div className="relative">
          <div className="absolute left-4 top-4 text-gray-400">
            <MessageSquare size={20} />
          </div>
          <textarea
            placeholder="Comment"
            rows={5}
            className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:bg-white transition-all text-base resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-900 transition-colors text-base"
        >
          SUBMIT REVIEW
        </button>
      </form>
    </div>
  )
}

export default SubmitReview
