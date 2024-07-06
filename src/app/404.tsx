import { AlertTriangle } from 'lucide-react';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 text-gray-800">
      <AlertTriangle className="w-24 h-24 text-red-500" />
      <h1 className="text-6xl font-bold mt-6">404</h1>
      <p className="text-2xl mt-4">Página não encontrada</p>
      <p className="mt-2 text-gray-600">Desculpe, mas a página que você está procurando não existe.</p>
      <a href="/" className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Voltar para a página inicial
      </a>
    </div>
  );
}
