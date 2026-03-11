import React, { useState } from 'react';
import { Instagram, Calendar, ExternalLink } from 'lucide-react';
import { instagramPosts } from '../data/instagramPosts';
import type { InstagramPost } from '../data/instagramPosts';

interface PostModalProps {
  post: InstagramPost;
  isOpen: boolean;
  onClose: () => void;
}

export default function InstagramGallery() {
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);

  return (
    <section id="instagram" className="py-20 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Instagram className="h-8 w-8 text-laranja" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Me acompanhe no Instagram!
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Acompanhe minhas últimas postagens e fique por dentro das novidades.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="w-full sm:w-64 group cursor-pointer bg-white dark:bg-neutral-800 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
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
                    <a href={post.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-white px-4 py-2 rounded-lg transition-colors font-semibold">
                      <Instagram className="h-8 w-8 mx-auto mb-2" />
                      <p className="text-sm font-medium">Ver post completo</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-end mb-2">
                  <span className="text-xs text-gray-500">
                    {new Date(post.date).toLocaleDateString('pt-BR')}
                  </span>
                </div>
                <p className="text-sm bg-gray-50 text-gray-800 dark:text-white line-clamp-2">
                  {post.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 rounded-lg p-1">
          <a
            href="https://www.instagram.com/psithiagopontes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-laranja via-musgo to-berge text-white px-6 py-3 rounded-lg transition-colors font-semibold transition-all group shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            <Instagram className="h-5 w-5" />
            <span>Seguir @psithiagopontes</span>
          </a>
        </div>
      </div>
    </section>
  );
}