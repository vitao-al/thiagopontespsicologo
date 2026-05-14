/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly LINK_WHATSAPP: string;
	readonly LINK_INSTAGRAM: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
