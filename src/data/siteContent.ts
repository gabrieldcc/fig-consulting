import type { LucideIcon } from 'lucide-react'
import {
  Bot,
  BriefcaseBusiness,
  CircleGauge,
  DatabaseZap,
  Gauge,
  Layers3,
  LayoutDashboard,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from 'lucide-react'

export type NavigationItem = {
  id: string
  label: string
}

export type BadgeItem = {
  label: string
  logo?: string
}

export type BenefitItem = {
  title: string
  description: string
}

export type ServiceItem = {
  icon: LucideIcon
  title: string
  description: string
}

export type DifferentiatorItem = {
  icon: LucideIcon
  title: string
  description: string
}

export type MethodologyStep = {
  icon: LucideIcon
  title: string
  description: string
}

export type MetricItem = {
  icon: LucideIcon
  value: string
  label: string
  description: string
}

export type TestimonialItem = {
  quote: string
  name: string
  role: string
  company: string
}

export type FaqItem = {
  question: string
  answer: string
}

export const siteContent = {
  navigation: [
    { id: 'inicio', label: 'Início' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'beneficios', label: 'Benefícios' },
    { id: 'metodologia', label: 'Metodologia' },
    { id: 'cases', label: 'Cases' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contato', label: 'Contato' },
  ] satisfies NavigationItem[],
  badges: [
    { label: 'Business Intelligence' },
    { label: 'Data Analytics' },
    { label: 'Dashboards' },
    { label: 'Power BI', logo: 'powerbi' },
    { label: 'Fabric', logo: 'fabric' },
    { label: 'Copilot', logo: 'copilot' },
  ] satisfies BadgeItem[],
  benefits: [
    {
      title: 'Clareza para decidir',
      description:
        'Unimos indicadores soltos em uma leitura simples para você decidir mais rápido e com menos risco de errar.',
    },
    {
      title: 'Identificação de oportunidades',
      description:
        'Revelamos onde sua empresa pode vender mais, ganhar margem e corrigir pontos de desperdício.',
    },
    {
      title: 'Visão Estratégica do negócio',
      description:
        'Transformamos números confusos em direcionamento claro para você priorizar o que realmente aumenta resultado.',
    },
    {
      title: 'Redução de ineficiência',
      description:
        'Eliminamos retrabalho, planilhas manuais e tempo perdido para sua equipe focar no que gera receita.',
    },
  ] satisfies BenefitItem[],
  services: [
    {
      icon: SearchCheck,
      title: 'Diagnóstico de dados',
      description:
        'Identificamos gargalos, falhas e oportunidades escondidas nos seus dados para acelerar resultado.',
    },
    {
      icon: CircleGauge,
      title: 'Modelagem de indicadores',
      description:
        'Definimos os indicadores que mostram onde vender mais, proteger margem e agir com velocidade.',
    },
    {
      icon: Bot,
      title: 'Automação de relatórios',
      description:
        'Automatizamos relatórios para cortar trabalho manual, reduzir erros e liberar tempo da equipe.',
    },
    {
      icon: TrendingUp,
      title: 'Análise de performance',
      description:
        'Lemos vendas, operações, marketing e finanças para mostrar onde crescer e o que corrigir primeiro.',
    },
    {
      icon: LayoutDashboard,
      title: 'Dashboards e BI',
      description:
        'Criamos dashboards que mostram em segundos o que está travando ou impulsionando o seu faturamento.',
    },
    {
      icon: DatabaseZap,
      title: 'Cultura data-driven',
      description:
        'Treinamos seu time para usar dados no dia a dia e transformar informação em execução.',
    },
  ] satisfies ServiceItem[],
  differentiators: [
    {
      icon: BriefcaseBusiness,
      title: 'Foco em resultado de negócio',
      description:
        'Cada entrega é pensada para aumentar faturamento, proteger margem e reduzir desperdício.',
    },
    {
      icon: Bot,
      title: 'Tecnologia e Inteligência Artificial',
      description:
        'Usamos IA, automação e BI para acelerar análises e transformar dados em vantagem competitiva.',
    },
    {
      icon: Layers3,
      title: 'Implantação prática',
      description:
        'Seu time recebe uma solução pronta para usar, sem depender de planilhas paralelas.',
    },
    {
      icon: ShieldCheck,
      title: 'Suporte ponta a ponta',
      description:
        'Acompanhamos da estratégia à adoção para garantir que os dados gerem resultado de verdade.',
    },
  ] satisfies DifferentiatorItem[],
  methodology: [
    {
      icon: SearchCheck,
      title: 'Diagnóstico',
      description:
        'Mapeamos onde sua empresa perde dinheiro, tempo e oportunidades.',
    },
    {
      icon: Layers3,
      title: 'Estruturação',
      description:
        'Organizamos dados e indicadores para criar uma base confiável para crescimento.',
    },
    {
      icon: Bot,
      title: 'Implementação',
      description:
        'Colocamos dashboards, automações e análises em produção com foco em ganho rápido.',
    },
    {
      icon: TrendingUp,
      title: 'Acompanhamento',
      description:
        'Ajustamos, treinamos e evoluímos a entrega para transformar dados em rotina de resultado.',
    },
  ] satisfies MethodologyStep[],
  metrics: [
    {
      icon: Gauge,
      value: '+9',
      label: 'anos de experiência em dados',
      description: 'Histórico construindo leitura executiva e inteligência aplicada ao negócio.',
    },
    {
      icon: Sparkles,
      value: '+70',
      label: 'executivos de empresas globais consumindo dados',
      description: 'Entregas desenhadas para rotinas de gestão que exigem clareza e velocidade.',
    },
    {
      icon: LayoutDashboard,
      value: '+55',
      label: 'dashboards entregues',
      description: 'Painéis executivos e operacionais conectados aos indicadores que importam.',
    },
    {
      icon: ShieldCheck,
      value: '98%',
      label: 'satisfação em projetos consultivos',
      description: 'Relações de parceria sustentadas por entrega prática, próxima e confiável.',
    },
  ] satisfies MetricItem[],
  testimonials: [
    {
      quote:
        'A FigData transformou um cenário fragmentado em uma leitura executiva clara. Hoje conseguimos reagir mais rápido e decidir com muito mais segurança.',
      name: 'Mariana Teles',
      role: 'Diretora de Operações',
      company: 'Nexa Varejo',
    },
    {
      quote:
        'Os dashboards trouxeram visibilidade real para a gestão comercial. Reduzimos tempo de consolidação e ganhamos consistência nas reuniões de performance.',
      name: 'Renato Azevedo',
      role: 'Head Comercial',
      company: 'Atlas Industrial',
    },
    {
      quote:
        'O diferencial foi unir profundidade analítica com uma implementação prática. A equipe internalizou os indicadores e a operação ficou muito mais previsível.',
      name: 'Luciana Prado',
      role: 'CFO',
      company: 'Verda Saúde Integrada',
    },
  ] satisfies TestimonialItem[],
  faqs: [
    {
      question: 'O que faz a FigData Consulting?',
      answer:
        'A FigData organiza seus dados, cria dashboards e aplica IA para ajudar sua empresa a vender mais, reduzir desperdícios e decidir com segurança.',
    },
    {
      question: 'A FigData atende empresas de quais portes?',
      answer:
        'Atendemos desde empresas pequenas, com pouca estrutura de dados até empresas que já possuem equipes internas e querem acelerar a maturidade dos dados e execução.',
    },
    {
      question: 'Vocês implementam dashboards?',
      answer:
        'Sim. Desenvolvemos dashboards em Power BI para que sua empresa acompanhe vendas, margem, equipe e operação em tempo real e aja mais rápido.',
    },
    {
      question: 'Como funciona o diagnóstico inicial?',
      answer:
        'Começamos entendendo objetivos, fontes de dados, fluxo decisório e gargalos atuais. A partir disso, definimos prioridades e um plano de ação.',
    },
    {
      question: 'Quanto tempo leva um projeto?',
      answer:
        'Depende da necessidade da sua empresa, mas muitos projetos já começam a gerar clareza e ganho percebido em poucos dias.',
    },
    {
      question: 'É possível contratar por escopo?',
      answer:
        'Podemos atuar em frentes específicas, como diagnóstico, construção de dashboards, automação ou acompanhamento contínuo. Não é necessário a contratação para o ciclo completo.',
    },
    {
      question: 'Vocês trabalham com Inteligência Artificial?',
      answer:
        'Sim, utilizamos Copilot integrado com o Power BI. Sendo possível criar um app exclusivo de visualização para sua empresa com acesso em tempo real no seu celular. Com disparos automáticos e com insights.',
    },
  ] satisfies FaqItem[],
  footerLinks: {
    email: 'contato@figconsulting.com.br',
    whatsapp: '+55 (11) 97123-4401',
    instagram: 'instagram.com/figdata',
  },
  heroHighlights: [
    'Descubra onde sua empresa perde dinheiro',
    'Dados confiáveis para decidir rápido',
    'Dashboards e IA para acelerar resultado',
  ],
  authority: [
    {
      icon: Gauge,
      title: 'Consultoria orientada por dados',
      description:
        'Descobrimos onde estão as maiores alavancas de crescimento e transformamos isso em execução.',
    },
    {
      icon: Sparkles,
      title: 'Dados e visuais que geram valor',
      description:
        'Não entregamos dashboards bonitos. Entregamos visibilidade para agir e faturar mais.',
    },
  ],
}
