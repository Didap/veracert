<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  ArrowLeft,
  Shield,
  Award,
  Globe,
  Building2,
  Leaf,
  HardHat,
  Zap,
  Car,
  Lock,
  Users,
  UtensilsCrossed,
  Factory,
  Wrench,
  FileCheck
} from 'lucide-vue-next'

interface Certification {
  name: string
  standard: string
  icon: typeof Shield
  accreditations: string[]
}

const systemCertifications: Certification[] = [
  {
    name: 'Sistema di Gestione per la Qualita',
    standard: 'ISO 9001',
    icon: Award,
    accreditations: ['ACCREDIA - Italia', 'CAI - Repubblica Ceca', 'DAKKS - Germania', 'ESYD - Grecia']
  },
  {
    name: 'Sistema di Gestione Ambientale',
    standard: 'ISO 14001 / Ecolabel / EMAS',
    icon: Leaf,
    accreditations: ['ACCREDIA - Italia', 'CAI - Repubblica Ceca', 'ESYD - Grecia', 'DAKKS - Germania']
  },
  {
    name: 'Sistema di Gestione per la Salute e Sicurezza',
    standard: 'ISO 45001',
    icon: HardHat,
    accreditations: ['ACCREDIA - Italia', 'CAI - Repubblica Ceca', 'DAKKS - Germania', 'ESYD - Grecia']
  },
  {
    name: 'Sistema di Gestione dell\'Energia',
    standard: 'ISO 50001',
    icon: Zap,
    accreditations: ['ACCREDIA - Italia']
  },
  {
    name: 'Sistema di Gestione per la Sicurezza Stradale',
    standard: 'ISO 39001',
    icon: Car,
    accreditations: ['ACCREDIA - Italia', 'ESYD - Grecia']
  },
  {
    name: 'Sistema di Gestione per la Prevenzione della Corruzione',
    standard: 'ISO 37001',
    icon: Shield,
    accreditations: ['ACCREDIA - Italia']
  },
  {
    name: 'Sistema di Gestione per la Sicurezza delle Informazioni',
    standard: 'ISO 27001',
    icon: Lock,
    accreditations: ['ACCREDIA - Italia', 'CAI - Repubblica Ceca']
  },
  {
    name: 'Sistema di Gestione Sociale',
    standard: 'PAS 24000',
    icon: Users,
    accreditations: ['ACCREDIA - Italia']
  },
  {
    name: 'Sistema di Gestione Etica e Responsabilita Sociale',
    standard: 'SA 8000',
    icon: Users,
    accreditations: ['SAI - Social Accountability International']
  },
  {
    name: 'Sistema di Gestione per la Sicurezza Alimentare',
    standard: 'ISO 22000',
    icon: UtensilsCrossed,
    accreditations: ['ACCREDIA - Italia']
  },
  {
    name: 'Sistema di Gestione per la Rintracciabilita Agroalimentare',
    standard: 'ISO 22005',
    icon: UtensilsCrossed,
    accreditations: ['ACCREDIA - Italia']
  },
  {
    name: 'Sistema di Gestione del Processo di Saldatura',
    standard: 'ISO 3834',
    icon: Wrench,
    accreditations: ['ACCREDIA - Italia', 'DAKKS - Germania']
  },
  {
    name: 'Sistema di Gestione per Dispositivi Medici',
    standard: 'ISO 13485',
    icon: Shield,
    accreditations: ['ACCREDIA - Italia']
  },
  {
    name: 'Pest Management',
    standard: 'UNI EN 16636',
    icon: Shield,
    accreditations: ['ACCREDIA - Italia']
  },
  {
    name: 'Certificazione F-GAS',
    standard: 'DPR 43/2012',
    icon: Factory,
    accreditations: ['ACCREDIA - Italia']
  }
]

const productCertifications: Certification[] = [
  {
    name: 'Marcatura CE Carpenterie Metalliche',
    standard: 'EN 1090',
    icon: Factory,
    accreditations: ['ACCREDIA - Italia']
  },
  {
    name: 'Certificazione Produttori di Calcestruzzo',
    standard: 'FPC',
    icon: Building2,
    accreditations: ['ACCREDIA - Italia']
  },
  {
    name: 'Marcatura CE Prodotti da Costruzione',
    standard: 'Reg. UE 305/2011',
    icon: Building2,
    accreditations: ['ACCREDIA - Italia']
  },
  {
    name: 'Certificazioni BRC',
    standard: 'BRC Global Standards',
    icon: UtensilsCrossed,
    accreditations: ['BRC']
  },
  {
    name: 'Certificazioni IFS',
    standard: 'IFS Food',
    icon: UtensilsCrossed,
    accreditations: ['IFS']
  },
  {
    name: 'Certificazioni GLOBAL GAP',
    standard: 'GlobalG.A.P.',
    icon: Leaf,
    accreditations: ['GlobalGAP']
  }
]

const serviceCertifications: Certification[] = [
  {
    name: 'Modello Organizzativo 231',
    standard: 'D.Lgs. 231/2001',
    icon: FileCheck,
    accreditations: ['ACCREDIA - Italia']
  },
  {
    name: 'Servizi Istituti di Vigilanza Privata',
    standard: 'UNI 10891',
    icon: Shield,
    accreditations: ['ACCREDIA - Italia']
  },
  {
    name: 'Centrali di Telesorveglianza',
    standard: 'UNI 50518',
    icon: Shield,
    accreditations: ['ACCREDIA - Italia']
  },
  {
    name: 'Servizi IT',
    standard: 'ISO/IEC 20000',
    icon: Lock,
    accreditations: ['ACCREDIA - Italia', 'CAI - Repubblica Ceca']
  },
  {
    name: 'Servizi all\'Infanzia',
    standard: 'UNI 11034',
    icon: Users,
    accreditations: ['ACCREDIA - Italia', 'CAI - Repubblica Ceca']
  }
]

const accreditationBodies = [
  { name: 'ACCREDIA', country: 'Italia', description: 'Ente Italiano di Accreditamento' },
  { name: 'DAKKS', country: 'Germania', description: 'Deutsche Akkreditierungsstelle' },
  { name: 'CAI', country: 'Repubblica Ceca', description: 'Czech Accreditation Institute' },
  { name: 'ESYD', country: 'Grecia', description: 'Hellenic Accreditation System' },
  { name: 'SAI', country: 'Internazionale', description: 'Social Accountability International' }
]
</script>

<template>
  <div class="min-h-screen pt-16">
    <!-- Hero Section -->
    <section class="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/20">
      <div class="container mx-auto px-4">
        <Button variant="ghost" as="a" href="/" class="mb-6">
          <ArrowLeft class="mr-2 h-4 w-4" />
          Torna alla Home
        </Button>

        <div class="max-w-4xl">
          <Badge variant="secondary" class="mb-4">I Nostri Partner</Badge>
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            Organismi di Certificazione
            <span class="text-primary"> Accreditati</span>
          </h1>
          <p class="text-xl text-muted-foreground mb-8">
            Ver.A. Cert effettua audit per conto di diversi Organismi di Certificazione accreditati
            da Organismi di Accreditamento firmatari degli accordi di Mutuo Riconoscimento MLA-IAF,
            che assicurano l'equivalenza sul mercato delle certificazioni.
          </p>
        </div>
      </div>
    </section>

    <!-- Accreditation Bodies -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <Badge variant="outline" class="mb-4">Enti di Accreditamento</Badge>
          <h2 class="text-3xl font-bold mb-4">
            Riconoscimento Internazionale
          </h2>
          <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
            I nostri partner sono accreditati dai principali enti europei e internazionali.
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
          <Card v-for="body in accreditationBodies" :key="body.name" class="text-center">
            <CardContent class="p-4">
              <Globe class="h-8 w-8 text-primary mx-auto mb-2" />
              <p class="font-bold">{{ body.name }}</p>
              <p class="text-xs text-muted-foreground">{{ body.country }}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- System Certifications -->
    <section class="py-16 bg-secondary/30">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <Badge variant="outline" class="mb-4">Certificazioni di Sistema</Badge>
          <h2 class="text-3xl font-bold mb-4">
            Sistemi di Gestione
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card v-for="cert in systemCertifications" :key="cert.standard" class="hover:shadow-lg transition-shadow">
            <CardHeader class="pb-2">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <component :is="cert.icon" class="h-5 w-5 text-primary" />
                </div>
                <div>
                  <Badge variant="secondary" class="mb-1">{{ cert.standard }}</Badge>
                  <CardTitle class="text-base">{{ cert.name }}</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p class="text-sm text-muted-foreground mb-2">Accreditamenti:</p>
              <div class="flex flex-wrap gap-1">
                <Badge v-for="acc in cert.accreditations" :key="acc" variant="outline" class="text-xs">
                  {{ acc }}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- Product Certifications -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <Badge variant="outline" class="mb-4">Certificazioni di Prodotto</Badge>
          <h2 class="text-3xl font-bold mb-4">
            Prodotti e Marcatura CE
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card v-for="cert in productCertifications" :key="cert.standard" class="hover:shadow-lg transition-shadow">
            <CardHeader class="pb-2">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <component :is="cert.icon" class="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <Badge variant="secondary" class="mb-1 bg-green-100 text-green-800">{{ cert.standard }}</Badge>
                  <CardTitle class="text-base">{{ cert.name }}</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p class="text-sm text-muted-foreground mb-2">Accreditamenti:</p>
              <div class="flex flex-wrap gap-1">
                <Badge v-for="acc in cert.accreditations" :key="acc" variant="outline" class="text-xs">
                  {{ acc }}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- Service Certifications -->
    <section class="py-16 bg-secondary/30">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <Badge variant="outline" class="mb-4">Certificazioni di Servizio</Badge>
          <h2 class="text-3xl font-bold mb-4">
            Servizi Certificati
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card v-for="cert in serviceCertifications" :key="cert.standard" class="hover:shadow-lg transition-shadow">
            <CardHeader class="pb-2">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
                  <component :is="cert.icon" class="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <Badge variant="secondary" class="mb-1 bg-orange-100 text-orange-800">{{ cert.standard }}</Badge>
                  <CardTitle class="text-base">{{ cert.name }}</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p class="text-sm text-muted-foreground mb-2">Accreditamenti:</p>
              <div class="flex flex-wrap gap-1">
                <Badge v-for="acc in cert.accreditations" :key="acc" variant="outline" class="text-xs">
                  {{ acc }}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <Card class="max-w-3xl mx-auto bg-primary text-primary-foreground">
          <CardContent class="p-8 text-center">
            <Shield class="h-12 w-12 mx-auto mb-4" />
            <h2 class="text-2xl font-bold mb-4">
              Certificazione Riconosciuta a Livello Internazionale
            </h2>
            <p class="text-primary-foreground/80 mb-6">
              Grazie ai nostri partner accreditati, le certificazioni rilasciate sono riconosciute
              in tutto il mondo attraverso gli accordi di mutuo riconoscimento IAF-MLA.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" as="a" href="mailto:veracertsrls@gmail.com?subject=Richiesta%20Informazioni%20Partner">
                Richiedi Informazioni
              </Button>
              <Button size="lg" variant="outline" class="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" as="a" href="tel:+393497478611">
                Chiama Ora
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  </div>
</template>
