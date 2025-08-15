import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Search, Menu, Syringe, Stethoscope, Scissors, PawPrint, Apple, ShoppingBag, Dog, Cat, Phone, Mail, MapPin } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function PetSpotLanding() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white px-6 py-4 shadow-sm" id="inicio">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">Petspets Home</span>
             */}
            <Image
              src="/bunny-logo.png"
              width={200}
              height={200}
              alt="Three kittens in wicker basket"
              className="rounded-lg object-cover"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#inicio" className="text-gray-700 hover:text-orange-500 font-medium">
              Inicio
            </Link>
            <Link href="#servicio" className="text-gray-700 hover:text-orange-500 font-medium">
              Servicios
            </Link>
            <Link href="#tips" className="text-gray-700 hover:text-orange-500 font-medium">
              Tips
            </Link>
            <Link href="#contactos" className="text-gray-700 hover:text-orange-500 font-medium">
              Contactos
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <section className="py-16 relative">
          <div className="absolute top-8 left-8 text-yellow-400 text-3xl"><PawPrint className="w-10 h-10 text-sky-400" /></div>
          <div className="absolute top-16 right-32 text-sky-400 text-2xl"><PawPrint className="w-10 h-10 text-sky-400" /></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                ¡Bienvenido a
                <br />
                The Pet Spot!
              </h1>
              <p className="text-gray-600 text-lg max-w-md">
                Tu lugar de confianza para todo lo relacionado con mascotas. Descubre consejos, guías y mucho más para mantener felices y saludables a tus peluditos.              </p>
              <Button className="bg-sky-400 hover:bg-sky-500 text-white px-8 py-3 rounded-lg text-lg">
                Encuentra la felicidad de tu mascota              </Button>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-100 h-100 bg-yellow-400 rounded-full flex items-end justify-center">
                  <Image
                    src="/perro-kuromi.png"
                    width={340}
                    height={340}
                    alt="Happy golden retriever puppy"
                    className="rounded-b-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 text-sky-400 text-2xl"><PawPrint className="w-10 h-10 text-sky-400" /></div>
              </div>
            </div>
          </div>
        </section>

        {/* Cat Section */}
        <section className="py-16 relative">
          <div className="absolute top-8 left-8 text-orange-400 text-3xl"><PawPrint className="w-10 h-10 text-sky-400" /></div>
          <div className="absolute bottom-16 right-8 text-sky-400 text-2xl"><PawPrint className="w-10 h-10 text-sky-400" /></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:order-1">
              <div className="relative">
                <div className="w-100 h-100 bg-sky-400 rounded-full flex items-center justify-center">
                  <Image
                    src="/gatouwu.png"
                    width={300}
                    height={300}
                    alt="Orange tabby kitten"
                    className=" rounded-bl-full rounded-tr-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 text-orange-400 text-2xl"><PawPrint className="w-10 h-10 text-sky-400" /></div>
              </div>
            </div>

            <div className="space-y-6 lg:order-2">
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                Más razas
                <br />
                Más amor
              </h2>
              <p className="text-gray-600 text-lg max-w-md">
                Ofrecemos varias razas de gatos y perros, elige y encuentra tu propio amor.              </p>
              <Button className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-lg text-lg">
                Encuentra tu amor aquí
              </Button>
            </div>
          </div>
        </section>

        {/* Professional Services */}
        <section className="py-16 relative" id="servicio">
          <div className="absolute top-8 left-8 text-yellow-400 text-3xl"><PawPrint className="w-10 h-10 text-sky-400" /></div>

          <h3 className="text-3xl text-center font-semibold text-orange-400 mb-12">Más de nuestros servicios profesionales</h3>
          <div className="flex justify-center space-x-16">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                <Syringe className="w-10 h-10 text-sky-600" />
              </div>
              <span className="text-gray-600 font-medium">Vacunas para mascotas</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                <Stethoscope className="w-10 h-10 text-sky-600" />
              </div>
              <span className="text-gray-600 font-medium">Revisión médica</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                <Scissors className="w-10 h-10 text-sky-600" />
              </div>
              <span className="text-gray-600 font-medium">Peluquería canina</span>
            </div>
          </div>
        </section>

        {/* Bottom Kittens Section */}
        <section className="py-16 relative">
          <div className="absolute top-8 right-8 text-sky-400 text-3xl"><PawPrint className="w-10 h-10 text-sky-400" /></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                Te aman desde gatito
                <br />
                te aman para siempre
              </h2>
              <p className="text-gray-600 text-lg max-w-md">
                Te ayudamos a amar a tu mascota proporcionándole alimentos, snacks, vitaminas y otras necesidades para mascotas.              </p>
              <Button className="bg-sky-400 hover:bg-sky-500 text-white px-8 py-3 rounded-lg text-lg">
                Encuentra la felicidad de tu mascota
              </Button>
            </div>

            <div className="flex justify-center">
              <Image
                src="/michis-juntos.png"
                width={400}
                height={300}
                alt="Three kittens in wicker basket"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>

        {/* Pet Care Tips Section */}
        <section className="py-16" id="tips">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Consejos para el cuidado de mascotas</h2>
            <p className="text-gray-600 text-lg">Consejos de expertos para mantener a tus amigas peludas saludables y felices.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Dog Care Tips */}
            <Card className="bg-white shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                  <Dog className="h-10 w-10 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Consejos para el cuidado de un perro</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Alimentación equilibrada</h4>
                      <p className="text-sm text-gray-600">
                        Dale croquetas o comida formulada para su edad, tamaño y nivel de actividad. Evita alimentos humanos que puedan ser dañinos (como chocolate, uvas o huesos cocidos).                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Ejercicio diario</h4>
                      <p className="text-sm text-gray-600">
                        Los perros necesitan moverse para gastar energía y evitar el aburrimiento. Sácalo a pasear, juega con él y permítele explorar nuevos entornos.                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Visitas al veterinario</h4>
                      <p className="text-sm text-gray-600">
                        Llévalo al veterinario para vacunas, desparasitaciones y chequeos anuales. También observa si presenta cambios de comportamiento o apetito.                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Aseo regular
                      </h4>
                      <p className="text-sm text-gray-600">
                        Cepíllalo con frecuencia, báñalo según su tipo de pelaje y mantén sus uñas, dientes y orejas limpias para evitar enfermedades.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cat Care Tips */}
            <Card className="bg-white shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-purple-100">
                  <Cat className="h-10 w-10 text-purple-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Consejos para el cuidado de un gato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="h-2 w-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Alimentación específica para gatos
                      </h4>
                      <p className="text-sm text-gray-600">
                        Usa comida seca o húmeda de buena calidad, adecuada a su edad. Los gatos necesitan una dieta rica en proteínas y no deben consumir comida para perros.                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="h-2 w-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Entorno enriquecido</h4>
                      <p className="text-sm text-gray-600">
                        Proporciónale juguetes, rascadores, escondites y espacios donde pueda trepar y mirar por la ventana. Esto estimula su mente y lo mantiene activo.                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="h-2 w-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Higiene de la caja de arena</h4>
                      <p className="text-sm text-gray-600">
                        Limpia su caja de arena a diario. Los gatos son muy limpios y pueden dejar de usarla si está sucia o huele mal.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="h-2 w-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Revisión veterinaria periódica</h4>
                      <p className="text-sm text-gray-600">
                        Aunque los gatos parecen independientes, necesitan vacunas, desparasitación y chequeos médicos regulares. También es importante esterilizarlos si no van a reproducirse.                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16" id="contactos">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Contáctanos</h2>
              <p className="text-gray-600 text-lg">Póngase en contacto con nuestras expertas en cuidado de mascotas.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contactos</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-700">(809) 010-3127</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-700">arisleyda@tejada.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-700">Santiago de los Caballeros, República Dominicana</span>
                  </div>
                </div>
              </div>

              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-gray-900">Envíanos un mensaje</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium text-gray-700">
                          Nombres
                        </label>
                        <Input id="first-name" placeholder="Escriba su nombre" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium text-gray-700">
                          Apellidos
                        </label>
                        <Input id="last-name" placeholder="Escriba su apellido" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Escriba su email" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Número de teléfono
                      </label>
                      <Input id="phone" type="tel" placeholder="Escriba su número teléfono" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="pet-type" className="text-sm font-medium text-gray-700">
                        Tipo de mascota
                      </label>
                      <Input id="pet-type" placeholder="Perro, Gato, Pajaro, Culebra, etc." />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Mensaje
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Cuéntanos sobre las necesidades de tu mascota o haznos alguna pregunta..."
                        className="min-h-[100px]"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      Enviar Mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-sky-400 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="border-t border-sky-300 mt-8 pt-6 text-center text-white text-sm">
            <p className="mb-4">Copyright © 2025 The Pet Spot - Todos los derechos reservados. By <strong>Arisleyda Tejada 23-SIST-7-004.</strong></p>
            <nav className="flex justify-center space-x-6">
              <Link href="#inicio" className="hover:underline">
                Inicio
              </Link>
              <Link href="#servicio" className="hover:underline">
                Servicios
              </Link>
              <Link href="#tips" className="hover:underline">
                Tips
              </Link>
              <Link href="#contactos" className="hover:underline">
                Contactos
              </Link>
            </nav>
          </div>
        </div>
      </footer>
      <Link
        href="#inicio"
        className="fixed bottom-6 right-6 z-50 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-colors"
        aria-label="Ir al inicio"
      >
        <PawPrint className="w-10 h-10 text-whte" />
      </Link>
    </div>
  )
}
