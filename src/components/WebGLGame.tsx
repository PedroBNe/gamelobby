'use client';
import { useEffect, useRef, useState } from 'react';

const UnityGame = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [unityInstance, setUnityInstance] = useState<any>(null); // Armazenar instância Unity

  // Função para enviar dados para o Unity
  const sendGameConfig = () => {
    const rawData = {
      cardBack: "https://i.imgur.com/LDsqclp.png",
      cardsList: [
        "https://draftsim.com/wp-content/uploads/2022/07/dmu-281-forest.png",
        "https://draftsim.com/wp-content/uploads/2022/07/dmu-281-forest.png",
        "https://draftsim.com/wp-content/uploads/2022/07/dmu-281-forest.png",
        "https://draftsim.com/wp-content/uploads/2022/07/dmu-281-forest.png",
        "https://draftsim.com/wp-content/uploads/2022/07/dmu-279-swamp.png",
        "https://mtginsider.com/wp-content/uploads/2024/08/senseisdiviningtop.png"
      ],
      storageItems: [
        { _itemName: "Chave", _initialValue: 8, _prizeScore: 100 },
        { _itemName: "Moeda", _initialValue: 0, _prizeScore: 50 },
        { _itemName: "Pergaminho", _initialValue: 0, _prizeScore: 75 }
      ],
      useLeads: false,
      gameName: "Jogo de <b>Teste</b>",
    };

    const jsonData = JSON.stringify(rawData);

    if (unityInstance) {
      console.log("Enviando configuração para Unity:", jsonData);
      unityInstance.SendMessage('WebGL Networking', 'ReceiveJson', jsonData);
    } else {
      console.warn("Instância Unity não encontrada! Verifique se o Unity foi carregado corretamente.");
    }
  };

  useEffect(() => {
    const handleUnityLoaded = async () => {
      try {
        const iframe = iframeRef.current;
        if (!iframe) throw new Error("Iframe não foi encontrado.");

        const unityWindow = iframe.contentWindow;
        if (!unityWindow) throw new Error("Não foi possível acessar a janela do iframe.");

        // Aguarde até que o unityInstance esteja disponível no contexto do iframe
        const checkUnityInstance = () => new Promise<any>((resolve) => {
          const interval = setInterval(() => {
            if (unityWindow.unityInstance) {
              clearInterval(interval);
              resolve(unityWindow.unityInstance);
            }
          }, 100); // Checa a cada 100ms
        });

        const instance = await checkUnityInstance();
        console.log("Unity carregado com sucesso!", instance);
        setUnityInstance(instance); // Armazena a instância
      } catch (error) {
        console.error("Erro ao carregar Unity:", error);
      }
    };

    const iframe = iframeRef.current;
    if (iframe) {
      iframe.onload = handleUnityLoaded; // Executa ao carregar o iframe
    }
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center flex-col">
      <iframe
        ref={iframeRef}
        src="/WebBuild0.5.3/index.html"
        frameBorder="0"
        width="1600px"
        height="1800px"
        allowFullScreen={true}
        scrolling="no"
        style={{ border: 'none' }}
      ></iframe>

      <button
        onClick={sendGameConfig}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
        disabled={!unityInstance} // Desabilita o botão até o Unity estar pronto
      >
        Enviar Configuração para o Jogo
      </button>
    </div>
  );
};

export default UnityGame;
