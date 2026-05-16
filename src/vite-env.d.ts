/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly LINK_WHATSAPP: string;
	readonly LINK_INSTAGRAM: string;
	readonly LINK_MAPS: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
