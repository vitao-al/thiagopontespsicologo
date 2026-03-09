import React, { useState } from 'react';
import { Instagram, Calendar, ExternalLink } from 'lucide-react';
import { instagramPosts } from '../data/instagramPosts';
import type { InstagramPost } from '../data/instagramPosts';

interface PostModalProps {
  post: InstagramPost;
  isOpen: boolean;
  onClose: () => void;
}

function PostModal({ post, isOpen, onClose }: PostModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
      <div className="bg-berge dark:bg-neutral-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-colors"
          >
            ✕
          </button>
          <img
            src={post.imageUrl}
            alt="Post do Instagram"
            className="w-full h-64 sm:h-80 object-contain rounded-t-lg"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-end mb-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-500">
                {new Date(post.date).toLocaleDateString('pt-BR')}
              </span>
            </div>
          </div>
          <p className="text-gray-800 dark:text-white mb-6 leading-relaxed font-poppins font-normal">
            {post.caption}
          </p>
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#D37037] via-[#8C8E45] to-[#C1C991] text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors"
          >
            <Instagram className="h-4 w-4" />
            <span>Ver no Instagram</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function InstagramGallery() {
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);

  return (
    <section id="instagram" className="py-20 bg-berge dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Instagram className="h-8 w-8 text-laranja" />
            <h2 className="text-3xl font-poppins font-normal bg-gradient-to-r from-[#D37037] via-[#8C8E45] to-[#C1C991] bg-clip-text text-transparent">
              Siga-nos no Instagram
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-poppins font-normal">
            Acompanhe nossas últimas postagens e fique por dentro das novidades.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="group cursor-pointer bg-white dark:bg-neutral-800 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden font-poppins font-normal"
              onClick={() => setSelectedPost(post)}
            >
                <div className="relative bg-black flex items-center justify-center overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt="Post do Instagram"
                    className="w-full h-64 object-contain bg-black transition-transform duration-300 group-hover:scale-105"
                    style={{ maxHeight: '16rem' }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                      <Instagram className="h-8 w-8 mx-auto mb-2" />
                      <p className="text-sm font-poppins font-normal">Ver post completo</p>
                    </div>
                  </div>
                </div>
              <div className="p-4">
                <div className="flex items-center justify-end mb-2">
                  <span className="text-xs text-gray-500">
                    {new Date(post.date).toLocaleDateString('pt-BR')}
                  </span>
                </div>
                <p className="text-sm text-gray-800 dark:text-white line-clamp-2">
                  {post.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/psithiagopontes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#D37037] via-[#8C8E45] to-[#C1C991] text-white px-6 py-3 rounded-lg transition-colors font-semibold"
          >
            <Instagram className="h-5 w-5" />
            <span className="font-poppins font-normal">Seguir @psithiagopontes</span>
          </a>
        </div>
      </div>

      <PostModal
        post={selectedPost!}
        isOpen={!!selectedPost}
        onClose={() => setSelectedPost(null)}
      />
    </section>
  );
}